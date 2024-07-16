<script lang="ts">
	import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	$: categories = [];
	import xml2js from 'xml-js';
	import { goto } from '$app/navigation';

	$: categoriasJson = {};

	const getCategories = async () => {
		console.log($page.url);
		const categoriesXmlRequest = ` 
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.ctiwebservice.com/xml/school">
                <soapenv:Header/>
                <soapenv:Body>
                    <sch:GetCategoriesRequest>
                    </sch:GetCategoriesRequest>
                </soapenv:Body>
            </soapenv:Envelope>
        `;

		try {
			const response = await fetch(
				`http://${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/service/categories`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'text/xml',
						SOAPAction: ''
					},
					body: categoriesXmlRequest
				}
			);
			const data = await response.text();
			const xmlParsedString: any = xml2js.xml2json(data, { compact: true, spaces: 4 });
			const xmlParsedJson = JSON.parse(xmlParsedString);
			console.log(categoriasJson);
			const categoriesArray =
				xmlParsedJson['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:GetCategoriesResponse'][
					'ns2:categories'
				];

			const mappedProducts = categoriesArray.map((product: any) => ({
				id: product['ns2:id']['_text'],
				name: product['ns2:name']['_text']
			}));

			categories = mappedProducts ?? [];
		} catch (error) {
			console.log({ error });
			categories = [];
		}
	};

	onMount(async () => {
		await getCategories();
	});
</script>

<div>
	<div class="mb-6 sm:mb-10 text-center mx-auto">
		<div class="flex flex-wrap gap-3 justify-center">
			{#each categories as { name, id }}
				<button
					class="bg bg-opacity-10 rounded-md shadow-md pt-5 pb-5 px-8 relative overflow-hidden border border-grey"
					on:click={() => goto(`/products?category=${id}`)}
				>
					<h4 {id} class="text-md font-semibold mx-3">{name}</h4>
				</button>
			{/each}
		</div>
	</div>
</div>
