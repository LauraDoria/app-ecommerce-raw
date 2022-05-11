//Array de objetos, simulación de base de datos de productos
//Entrega final, agregar en cada producto la propiedad "stock", completar las propiedades faltantes.
//Editar las imágenes grandes de las cards de detalle y cambiar color de fondo de las imágenes chicas.
const products = [

    {
        id: 1,
        nombre: "Shampoo Sólido Cabello Graso",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "graso",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 450,
        presentacion: "50gr",
        imagen: "./Images/shampoo-cabello-graso.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 2, 
        nombre: "Shampoo Sólido Cabello Seco", 
        tipoProducto: "productoCapilar", 
        tipoPiel: "no disponible", 
        tipoCabello: "seco",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 450, 
        presentacion: "50gr",
        imagen: "./Images/shampoo-cabello-seco.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Si tu pelo tiene tendencia a ser muy seco, quebradizo o con frizz o si fue sometido a tratamientos agresivos como tinturas, decoloraciones o uso constante de la planchita, nuestro shampoo con aceite de almendras dulces, formulado con mayor porcentaje de aceite y agregado de elastina ayudará a mantenerlo fuerte e hidratado. Con aroma a jazmín, rosas y benjuí.",
        modoUso: "Frotá la pastilla entre tus manos o sobre el cabello mojado hasta generar la cantidad de espuma deseada. Masajeá el cuero cabelludo durante algunos minutos y luego enjuagá. Si tu cabello es muy seco, dejar algo de producto ayudará a mantenerlo hidratado. No olvides colocar el shampoo en un lugar seco después de usarlo para maximizar su duración.",
        inci: "SCI (Sodium Cocoyl Isethionate), Hidrolato de Rosas (Rosa Damascena Flower Water), Aceite de Almendras Dulces (Prunus Amygdalus Dulcis Oil), Manteca de Karité (Butyrospermum Parkii Butter), Elastina Hidrolizada (Hydrolized Elastin, Phenoxyethanol / Ethylhexylglycerin), Proteína de Seda Hidrolizada (Hydrolized Silk Protein, Phenoxyethanol / Ethylhexylglycerin), Geogard®221 (Dehydroacetic Acid, Benzyl Alcohol), Vitamina E (Tocopherol Acetate), AE de Ylang Ylang (Cananga Odorata Oil), Esencia de Sándalo.",
    },

    {
        id: 3, 
        nombre: "Acondicionador Sólido para Todo Tipo de Cabello",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "todos",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 500,
        presentacion: "50gr",
        imagen: "./Images/acondicionador-solido.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 4, 
        nombre: "Aceite Capilar de Jojoba", 
        tipoProducto: "productoCapilar", 
        tipoPiel: "no disponible", 
        tipoCabello: "graso", 
        usos: "nutrición", 
        zeroWaste: "NO",
        precio: 700, 
        presentacion: "60ml",
        imagen: "./Images/aceite-jojoba.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 5,
        nombre: "Aceite Capilar de Almendras Dulces",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "normal",
        usos: "nutrición",
        zeroWaste: "NO",
        precio: 500,
        presentacion: "60ml",
        imagen: "./Images/aceite-almendras-dulces.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 6,
        nombre: "Blend de Aceites Capilares Palta y Coco",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "seco",
        usos: "nutrición",
        zeroWaste: "NO",
        precio: 600,
        presentacion: "60ml",
        imagen: "./Images/aceite-palta-coco.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 7,
        nombre: "Blend de Aceites para el Cabello",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "todos",
        usos: "nutrición",
        zeroWaste: "NO",
        precio: 700,
        presentacion: "60ml",
        imagen: "./Images/blend-aceites.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 8,
        nombre: "Limpiador Facial Sólido Pieles Grasas",
        tipoProducto: "productoFacial",
        tipoPiel: "grasa",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 400,
        presentacion: "50gr",
        imagen: "./Images/limpiador-facial-pieles-grasas.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 9,
        nombre: "Limpiador Facial Sólido Pieles Secas",
        tipoProducto: "productoFacial",
        tipoPiel: "seca",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 400,
        presentacion: "50gr",
        imagen: "./Images/limpiador-facial-pieles-secas.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 10,
        nombre: "Limpiador Facial Sólido Pieles Sensibles",
        tipoProducto: "productoFacial",
        tipoPiel: "sensible",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "SI",
        precio: 400,
        presentacion: "50gr",
        imagen: "./Images/limpiador-facial-pieles-sensibles.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 11,
        nombre: "Limpiador Facial Pieles Normales",
        tipoProducto:"productoFacial",
        tipoPiel: "todos",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "NO",
        precio: 800,
        presentacion: "125ml",
        imagen: "./Images/limpiador-facial-pieles-normales.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 12,
        nombre: "Agua de Rosas",
        tipoProducto: "productoFacial",
        tipoPiel: "todos",
        tipoCabello: "no disponible",
        usos: "hidratación",
        zeroWaste: "NO",
        precio: 600,
        presentacion: "60ml",
        imagen: "./Images/agua-rosas.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 13,
        nombre: "Agua de Lavanda",
        tipoProducto: "productoFacial",
        tipoPiel: "grasa",
        tipoCabello: "no disponible",
        usos: "hidratación",
        zeroWaste: "NO",
        precio: 600,
        presentacion: "60ml",
        imagen: "./Images/agua-lavanda.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 14,
        nombre: "Sérum Facial con Vitamina C",
        tipoProducto: "productoFacial",
        tipoPiel: "todos",
        tipoCabello: "no disponible",
        usos: "nutrición",
        zeroWaste: "NO",
        precio: 600,
        presentacion: "15cc",
        imagen: "./Images/serum-facial.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 15,
        nombre: "Body Lotion Pieles Grasas",
        tipoProducto: "productoCorporal",
        tipoPiel: "grasa",
        tipoCabello: "no disponible",
        usos: "hidratación",
        zeroWaste: "NO",
        precio: 1000,
        presentacion: "250cc",
        imagen: "./Images/body-lotion-piel-grasa.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 16,
        nombre: "Body Lotion Pieles Secas",
        tipoProducto: "productoCorporal",
        tipoPiel: "seca",
        tipoCabello: "no disponible",
        usos: "hidratacion",
        zeroWaste: "NO",
        precio: 1000,
        presentacion: "250cc",
        imagen: "./Images/body-lotion-piel-seca.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 17,
        nombre: "Body Lotion Pieles Maduras",
        tipoProducto: "productoCorporal",
        tipoPiel: "madura",
        tipoCabello: "no disponible",
        usos: "hidratación",
        zeroWaste: "NO",
        precio: 1000,
        presentacion: "250cc",
        imagen: "./Images/body-lotion-piel-madura.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 18,
        nombre: "Arcilla Verde",
        tipoProducto: "productoFacial",
        tipoPiel: "grasa",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "NO",
        precio: 550,
        presentacion: "50gr",
        imagen: "./Images/arcilla-verde.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 19,
        nombre: "Arcilla Blanca",
        tipoProducto: "productoFacial",
        tipoPiel: "normal",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "NO",
        precio: 550,
        presentacion: "50gr",
        imagen: "./Images/arcilla-blanca.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 20,
        nombre: "Arcilla Roja",
        tipoProducto: "productoFacial",
        tipoPiel: "seca",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "NO",
        precio: 550,
        presentacion: "50gr",
        imagen: "./Images/arcilla-roja.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 21,
        nombre: "Arcilla Detox",
        tipoProducto: "productoFacial",
        tipoPiel: "todos",
        tipoCabello: "no disponible",
        usos: "limpieza",
        zeroWaste: "NO",
        precio: 600,
        presentacion: "50gr",
        imagen: "./Images/arcilla-detox.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 22,
        nombre: "Cofia de Seda",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "todos",
        usos: "otros",
        zeroWaste: "SI",
        precio: 500,
        presentacion: "x 1",
        imagen: "./Images/cofia-seda.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },

    {
        id: 23,
        nombre: "Sujetador de Cabello de Seda",
        tipoProducto: "productoCapilar",
        tipoPiel: "no disponible",
        tipoCabello: "todos",
        usos: "otros",
        zeroWaste: "SI",
        precio: 200,
        presentacion: "x 1",
        imagen: "./Images/sujetador-seda.png",
        imagenDetalle: "./Images/shampoo-solido-seco-grande.png",
        detalle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        modoUso: "Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputa.",
        inci: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },
]

const categories = [
    {id: 1,path: '/category/productoCapilar', description: 'Productos Capilares'},
    {id: 2,path: '/category/productoFacial', description: 'Productos Faciales'},
    {id: 3,path: '/category/productoCorporal', description: 'Productos Corporales'},
]

//Exportar función getCategories, categorías de productos para navegación por categorías.
export const getCategories = () => {
    return new Promise (resolve => {
        resolve(categories)
    })
}

//Exportar función getProductList, simulación de API para galería de productos.
export const getProductList = () => {
    return new Promise (resolve => {
        resolve(products)
    })
}


//Exportar función getProductInfo, simulación de API para páginas de detalle de productos.
export const getProductInfo = (id) => {
    //Retorna promesa de respuesta a la petición de datos de productos
    //Las Promise son objetos predefinidos del entorno de JS
    /*"resolve" es el parámetro de la función que se pasa luego al bloque de código que se ejecuta
    al recibir la respuesta, en este caso con el método .then de promesa resuelta correctamente. Se
    escribe dentro de un setTimeOut para simular el tiempo que demora en procesarse una petición
    real*/
    /*El array de objetos "products" se pasa como argumento de "resolve", es decir, la base de datos
    de productos es la respuesta a la petición del usuario.*/
    //El tiempo está en milisegundos (3000ms = 3s)
    /*La promesa resuelta como error también se puede trabajar como segundo argumento dentro del
    método then(), sin usar el método catch()*/
    //Método finally() siempre se ejecuta, usar con useState para crear un spinner (clase 5, 1 hora 40 minutos)
    return new Promise (resolve => {
        resolve(products.find(product => product.id == id))
    })
}

//Exportar función getProductList, simulación de API para galería de productos por categoría.
export const getProductCategory = (category) => {
    return new Promise (resolve => {
        resolve(category ? products.filter(product => product.tipoProducto === category) : products)
    })
}

/*
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}





setTimeout(() => {
            resolve(products)
        }, 100)
.find(product => product.id === id)

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
*/
