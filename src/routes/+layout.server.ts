import type { LayoutServerLoad } from './$types';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch, cookies, route }) => {
	const AuthorizationToken = cookies.get('AuthorizationToken');


	// 	const xmlRequest = `
	// 	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.howtodoinjava.com/xml/school">
	// 	<soapenv:Header/>
	// 	<soapenv:Body>
	// 		<sch:StudentDetailsRequest>
	// 			<sch:name>Sajal</sch:name>
	// 		</sch:StudentDetailsRequest>
	// 	</soapenv:Body>
	// 	</soapenv:Envelope>
	// `;

	// try {
	// 	const response = await fetch(`http://localhost:8081/service/student-details`, {
	// 		method: 'POST',
	// 		redirect: 'follow',
	// 		headers: {
	// 			'Content-Type': 'text/xml',
	// 			SOAPAction: ''
	// 		},
	// 		body: xmlRequest
	// 	});
	// 	const data = await response.text();

	// 	const result = xml2js.xml2json(data, { compact: true, spaces: 4 });

	// 	console.log('RESPONSE: ', JSON.stringify(result));
	// 	return { result: JSON.parse(result) };
	// } catch (error) {
	// 	return { error: JSON.stringify(error) };
	// }

	try {
		const response = await fetch(
			`${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/api/user/authorizate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ AuthorizationToken })
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		return {};
	}
};
