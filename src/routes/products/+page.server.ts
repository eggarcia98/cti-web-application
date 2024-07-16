import type { PageServerLoad } from './$types';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';
import xml2js from 'xml-js';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const categoryId = url.searchParams.get('category_id');
	const xmlRequest = `
			<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.ctiwebservice.com/xml/school">
				<soapenv:Header/>
				<soapenv:Body>
					<sch:GetProductsRequest>
					<sch:category_id>${categoryId ? categoryId : 0}</sch:category_id>
					</sch:GetProductsRequest>
				</soapenv:Body>
			</soapenv:Envelope>
		`;

	try {
		const response = await fetch(
			`http://${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/service/products`,
			{
				method: 'POST',
				redirect: 'follow',
				headers: {
					'Content-Type': 'text/xml',
					SOAPAction: ''
				},
				body: xmlRequest
			}
		);
		const data = await response.text();
		const xmlParsedString: any = xml2js.xml2json(data, { compact: true, spaces: 4 });
		const xmlParsedJson: any = JSON.parse(xmlParsedString);

		const productsArray =
			xmlParsedJson['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:GetProductsResponse'][
				'ns2:products'
			];

		// Function to map each product to { id, name, price }
		const mappedProducts = productsArray.map((product: any) => ({
			id: product['ns2:id']['_text'],
			name: product['ns2:name']['_text'],
			price: parseFloat(product['ns2:price']['_text']),
			description: product['ns2:description']['_text']
		}));

		return {
			products: mappedProducts
		};
	} catch (error) {
		console.log(error);
		return { error: JSON.stringify(error), products: [] };
	}
};
