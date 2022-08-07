import images from "./images"

const data = {
    user: {
        name: 'Tuatta',
        img: images.avt
    },
    summary: [

        {
            name: 'Hotel Torino',
            title: 'Consultor/a Sr.',
            img: images.empresa,
            img2: images.whatsapp,
            time: 'Disponibilidad mínima de 4 horas (medio tiempo)',
            requirements: 'Excel nivel avanzado, conocimiento de base de datos (deseable), conocimiento en reportes (Dashboards)',
            careers: ['Ingenieria en Sistemas', 'Administración de Empresas', 'Ingenieria Comercial'],
            car1: 'Ingenieria en Sistemas',
            car2: 'Administración de Empresas',
            car3: 'Ingenieria Comercial',
           
        },
        {
            name: 'Applikate',
            title: 'Servicios de marketing digital',
            img: images.empresa,
            img2: images.whatsapp,
            time: 'Sujeto a coordinacion con administracion',
            requirements: 'Manejo y administracion de redes sociales, Capacidad de innovacion',
            careers: ['Ingenieria en Sistemas', 'Administración de Empresas', 'Ingenieria Comercial'],
            car1: 'Diseno Grafico',
            car2: 'Marketing y logistica',
            car3: 'Ingenieria Comercial',
           
        }
    ],
    webinar: [
        {
            name: 'Taller de Comunicacion Efectiva del Valor Profesional, a traves de un CV',
            nameFacilitador:'Lic. Alejandra Pacheco',
            cargo:'Asesora de Aprendizaje y Desarrollo'

        }
    ],
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data