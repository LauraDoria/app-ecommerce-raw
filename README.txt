Componentes:

App

	Home (Ruta '/home')

	ItemListContainer (Ruta '/list' para galería de productos o '/category/:categoryId' para productos filtrados por categoría)

		NavBar
		   	    CartWidget
		ItemList
		   	    Item
		Footer

	ItemDetailContainer (Ruta '/detail/:productId')

		NavBar
		   	    CartWidget
		ItemDetail
		   	    ProductCounter --> ProductCountContext (accesible para componentes dentro del Provider 'ProductCountContext')
		Footer

	Cart (Ruta '/cart')

		NavBar
			    CartWidget
		CartItem

		ClientPurchaseForm

		CartLogicContext (accesible para componentes dentro del Provider 'CartLogicContext')

		Footer

	NotFound (Ruta '/*')

	Notification (accesible para componentes dentro del Provider 'Context')

	LoadingSpinner (accesible para componentes dentro del Provider 'Context')

------------------------------------------------------------------------------------------------------------------------------------------------

App

Home: Landing page, ruta por defecto, el sitio redirecciona automáticamente a esta página cuando la ruta es '/'. Link a '/list'. Sin NavBar ni Footer.

ItemListContainer: Galería

ItemList: Lista de productos

Item: Card de producto

ItemDetailContainer: Páginas de detalle de productos

ItemDetail: Card de detalle de producto

ProductCounter: En ItemDetail. Contador de unidades de producto a agregar al Carrito de compras. Al hacer clic en 'Agregar al Carrito', agrega los productos seleccionados en la cantidad deseada, desmonta el contador y monta un link a '/cart'.

Cart: Carrito de compras

CartItem: Información sobre un producto dentro del carrito de compras

ClientPurchaseForm: En '/cart', formulario para solicitar los datos del usuario cuando éste va a realizar una compra, antes de procesar el pago.

CartLogicContext: Manejo de la lógica de funcionamiento del Carrito.

NavBar: Menú de navegación, en '/list', '/category/:categoryId', '/detail/:productId' y '/cart'.

CartWidget: En NavBar. Contador del total de productos en el carrito de compras.

Footer: Pie de página, en '/list', '/category/:categoryId', '/detail/:productId' y '/cart'. Link a '/home' y a redes de la marca. Información sobre la empresa, medios de pago y de envío.

NotFound: Página no encontrada error 404, redirecciona a esta página cuando la ruta no corresponde con ninguna de las especificadas. Link a '/home'.

Notification: Notificación pop up

LoadingSpinner: Se muestra esta animación mientras la ruta solicitada se carga, una vez cargada, el componente de desmonta y se monta la página solicitada.