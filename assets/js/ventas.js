const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    }
    ]

    const propiedadesVenta = document.getElementById('ventas')

    for(let venta of propiedades_venta){
        template = `
        <div class="venta">
        <img src= "${venta.src}">
        <h2> ${venta.nombre} </h2>
        <p> ${venta.descripcion} </p>
        <p> ${venta.ubicacion} </p>
        <p> ${venta.habitaciones} </p>
        <p> ${venta.costo} </p>`

        if(venta.smoke){
            template += `<p> Permitido fumar </p>`
        }else{
            template += `<p> No se permite fumar </p>`
        }

        if(venta.pets){
            template += `<p> Mascotas permitidas </p>`
        }else{
            template += `<p> No se permiten mascotas </p>`
        }

        template += `</div>`

        propiedadesVenta.innerHTML += template
    }