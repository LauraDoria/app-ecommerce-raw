Componentes:

App

	Home (Ruta '/home')

	ItemListContainer (Ruta '/list' para galería de productos o '/category/:categoryId' para productos filtrados por categoría)

		NavBar ---->    	CartWidget
		   	       
		ItemList ---->	        Item
		   	       
		Footer

		LoadingSpinner

	ItemDetailContainer (Ruta '/detail/:productId')

		NavBar ---->	        CartWidget
		   	       
		ItemDetail ---->	ProductCounter
		   	       
		Footer

	Cart (Ruta '/cart')

		NavBar ---->            CartWidget
			       
		CartItem

		ClientPurchaseForm

		CartContext (accesible para componentes dentro del Provider 'CartContext')

		Footer

	NotFound (Ruta '/*')

------------------------------------------------------------------------------------------------------------------

App: Contenedor padre. Setea las rutas asociadas a cada uno de los componentes principales de la app, mediante 'BrowserRouter'/'Routes'/'Route' de 'React-Router-Dom' y engloba a todos los elementos de la aplicación con la burbuja del 'Provider' de CartContext.

Home: Landing page, ruta por defecto, el sitio redirecciona automáticamente a esta página cuando la ruta es '/', usando 'Navigate' de 'React-Router-Dom'. Link a '/list' en la imagen del logo de marca. Sin NavBar ni Footer.

ItemListContainer: Galería de productos, recibe los datos de cada producto desde la base de datos de 'Firestore', los guarda como array seteado como estado 'products' y los pasa a ItemList por props. Contiene NavBar y Footer. Mientras los productos se cargan, es decir products.length === 0, muestra la animación de carga, LoadingSpinner. Las categorías '/category/:categoryId' se setean mediante useParams.

ItemList: Lista de productos, mapea por cada elemento del array 'products', recibido por props desde componente padre, ItemListContainer, una card de producto. Las cards se ordenan en forma ascendente tomando como referencia del 'query' el valor 'numeroOrden' de cada producto.

Item: Card de producto, cada una recibe por props los valores de 'id', 'nombre', 'precio' e 'imagen', del componente padre, ItemList. Cada una tiene un Link a '/detail/:productId', la página de detalle de producto que tenga el mismo 'id'.

ItemDetailContainer: Páginas de detalle de productos, recibe los datos de cada producto desde la base de datos de 'Firestore' y los pasa a ItemDetail por props. Contiene NavBar, Footer y un submenú de navegación con links a '/cart' o de vuelta a '/list'. Cada '/detail/:productId' se setea mediante 'useParams', montando la página del producto que tenga el 'id' correspondiente.

ItemDetail: Card de detalle de producto (recibe valores de 'id', 'nombre', 'imagenDetalle', 'precio', 'tipoPiel', 'tipoCabello', 'usos', 'zeroWaste', 'presentacion', 'detalle', 'modoUso', 'inci' y 'stock' de componente padre, ItemDetailContainer). Función 'addToCart', recibe de ProductCounter el estado que guarda la cantidad de unidades, crea un objeto que guarde 'id', 'nombre', 'precio', 'presentacion', 'cantidad' y 'subtotal' y, mediante la función 'addTocart' de CartContext, agrega el producto al carrito. Si se intenta agregar 0 unidades, el producto no se agrega y muestra una notificación similar a la de ClientPurchaseForm, informando del error, lo mismo si se agrega un producto o si se lo elimina, en cada caso con su mensaje correspondiente. Al agregar un producto se desmonta ProductCounter y se montan un Link al '/cart' y un botón de eliminar producto que asociado mediante 'onClick' a la función 'removeItemFromCart' de CartContext.

ProductCounter: En ItemDetail. Contador de unidades de producto a agregar al Carrito de compras. Funciona usando un estado 'productCount' que se modifica mediante evento 'onClick' de alguno de los dos botones '+' (el límite es el valor de 'stock' recibido por props de componente padre, ItemDetail) o '-' (no permite valores menores a 0). Al hacer clic en 'Agregar al Carrito', asociado mediante evento 'onClick' a la función 'addToCart', que es enviada por props desde el componente padre, ItemDetail, regresa a ItemDetail el 'productCount' para ser utilizado por la función 'addProductToCart' de CartContext, agrega los productos seleccionados en la cantidad deseada y desmonta el contador. 

Cart: Carrito de compras, muestra la lista de productos agregados por el cliente, mapeando cada elemento de 'cart' como un CartItem, o muestra un aviso de que el carrito está vacío en caso de que cart.length === 0 ('cart' array seteado como estado que guarda la lista de productos agregados). Muestra los totales de unidades y monto de la compra mediante las funciones 'getProductQuantity' y 'cartTotal'. El botón 'Comprar' mediante 'onClick', monta el componente ClientePurchaseForm. Recibe del componente hijo ClientePurchaseForm, el estado 'clientForm' por medio de la función 'generarOrdenDeCompra', crea un objeto que guarda tanto los detalles de los productos a comprar como los datos del cliente, actualiza los valores 'stock' correspondientes en 'Firestore' y crea un nuevo documento en la base datos 'orders' de Firestore, que guarda las órdenes de compra de los clientes. Pasa el 'id' del documento de la orden de compra a ClientePurchaseForm.

CartItem: Recibe por props los datos desde componente padre, Cart. Información sobre un producto dentro del carrito de compras, aparece como un renglón dentro del carrito, mostrando el nombre del producto, su presentación, la cantidad de unidades y el subtotal. Tiene un botón para eliminar todas las unidades de un mismo producto, asociado a evento 'onClick' que llama a la función 'removeItemFromCart' de CartContext.

ClientPurchaseForm: En '/cart', formulario para solicitar los datos del usuario cuando éste va a realizar una compra, antes de procesar el pago. La función submitHandle realiza la validación de los campos (si el campo fue completado y si la cantidad de caracteres es válida). Los campos incorrectos u omitidos de acuerdo a lo que especifique la condición para cada uno se pasan como 'null', si al hacer la comprobación final de todo el form alguno de los campos arroja 'null', la función informa de error e impide continuar la compra hasta que no se corrija o completen los campos correspondientes. Caso contrario setea un estado de 'clientForm' que luego se pasa a Cart mediante la función 'generarOrdenDeCompra' (que fue recibida por props desde Cart) para procesar la compra y actualizar stocks, caso contrario . Se muestra una notificación que informa que no se pudieron enviar los datos por algún dato incorrecto o faltante y se marca en rojo el error abajo del campo correspondiente. El error desaparece con evento onChange en el campo. La notificación se muestra o no dependiendo de un estado que controlan las funciones asociadas a eventos onClick en el submit de enviar formulario y en el botón de dismiss de la notificación. Si los datos son correctos, se desmonta el form y monta un botón 'Pagar' que es el que llama a la función 'generarOrdenDeCompra', enviando el estado de 'clientForm' a Cart. Al terminar de procesarse la orden de compra, recibe de Cart el 'id' del documento de la misma, desmonta el botón 'Pagar' y monta un mensaje que muestra ese 'id' como número de seguimiento para el cliente.

CartContext: Manejo de la lógica de funcionamiento del Carrito. Seteo del estado del carrito al agregar productos nuevos o eliminarlos y funciones para manejar el agregado de nuevos productos, su eliminación, verificar si un producto ya fue agregado, sumar la cantidad total de unidades de todos los productos  y el monto total del carrito. Son utilizadas por Cart, CartItem, ItemDetail, ProductCounter, CartWidget. Funciones:

	-'cart'(array de los productos agregados al carrito por el cliente, se guarda como estado mediante 'setCart').
	-'setCart' (función que actualiza el estado de 'cart' mediante 'useState').
	-'addProductToCart' (crea un nuevo array que incluya todos los elementos del array guardado en cart mediante spread operator y le agrega el nuevo producto, setea el nuevo array como estado de 'cart', llamando a 'setCart').
	-'removeItemFromCart' (a partir del array guardado como estado en cart, crea un nuevo array que incluya todos los items que no tengan la id del producto a eliminar y setea un nuevo estado para cart).
	-'clearCart' (vacía el carrito, seteando 'cart' como un array vacío).
	-'getProductQuantity' (cuenta cantidad total de productos, mediante ciclo forEach, para cada producto guardado en el estado 'cart', suma al contador el valor guardado en la propiedad 'cantidad' de cada uno).
	-'cartTotal' (función que suma el monto total del carrito, mediante ciclo forEach, para cada producto guardado en el estado 'cart', suma al contador el valor guardado en la propiedad 'subtotal' de cada uno).

NavBar: Menú de navegación, para  '/home' ( el link de '/home' está en el logo y en el nombre de la marca ) '/list', '/category/:categoryId', '/detail/:productId' y '/cart' ( el link de '/cart' está en el  CartWidget). Las categorías de navegación se traen desde otra colección de 'Firestore', se mapea cada elemento de la colección como un Link y se ordenan de acuerdo al valor 'numeroOrden' de forma ascendente mediante 'query'.

CartWidget: En NavBar. Contador del total de productos en el carrito de compras. Se actualiza al agregar/eliminar productos desde las páginas de productos '/detail/:productId' o al eliminar productos o vaciar el carrito desde '/cart'. Actualiza llamando a la función 'getProductQuantity' de CartContext.

Footer: Pie de página, en '/list', '/category/:categoryId', '/detail/:productId' y '/cart'. Link a '/home' y a redes de la marca. Información sobre la empresa, medios de pago y de envío.

NotFound: Página no encontrada error 404, redirecciona a esta página cuando la ruta no corresponde con ninguna de las especificadas. Link de regreso a '/home'.

LoadingSpinner: Se muestra esta animación mientras se cargan los productos desde 'Firestore', una vez cargada, el componente de desmonta y se monta el componente de ItemList en '/list'.

------------------------------------------------------------------------------------------------------------------

Productos en Firestore - Campos:

nombre: (string) nombre del producto.

numeroOrden: (number) número de orden, para ordenar las cards en la galería, no aplica a categorías.

stock: (number) unidades de producto disponibles.

precio: (number) precio unitario.

presentacion: (string) peso o cantidad por unidad.

tipoProducto: (string) para filtrar por categorías según si es producto para el cabello, la piel o el cuerpo.

usos: (string) función del producto, para limpieza, nutrición, hidratación u otros usos.

tipoCabello: (string) indica el tipo de cabello para el que fue pensado el producto. 

tipoPiel: (string) indica el tipo de piel para la que fue pensado el producto.

zeroWaste: (string) indica si el producto tiene empaque biodegradable.

detalle: (string) breve descripción del producto.

modoUso: (string) instrucciones de uso del producto.

inci: (string) ingredientes del producto.

imagen: (string) link a la ubicación en firebase storage del archivo de imagen que carga en '/list'. Ej: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-raw-30ab6.appspot.com/o/imagenesProductosRaw%2Fshampoo-solido-graso-grande.png?alt=media&token=85cbe1bc-16e5-411b-b2eb-838c77b1a5b3'

imagenDetalle: (string) link a la ubicación en firebase storage del archivo de imagen que carga en '/detail/:productId'. Ej: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-raw-30ab6.appspot.com/o/imagenesProductosRaw%2Fshampoo-solido-graso-grande.png?alt=media&token=85cbe1bc-16e5-411b-b2eb-838c77b1a5b3'