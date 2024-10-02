const title = "Latonería y Pintura";
const email = "gomezcamilo750@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3172803915";
const textos = {
    index: {
        title: `${title}`,
        slogan: "Siempre a tu servicio",
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Latonería y Pintura, nos especializamos en ofrecer servicios de alta calidad en latonería y pintura. Con años de experiencia en el sector, nuestro objetivo es proporcionar resultados precisos y duraderos que cumplan con los más altos estándares de calidad. \n" +
            "Nos enorgullece ofrecer un servicio detallado y meticuloso en cada proyecto. Desde reparaciones de latonería hasta trabajos de pintura, cada tarea es realizada con cuidado y profesionalismo para asegurar que el resultado final sea impecable. \n" +
            "En Latonería y Pintura, entendemos la importancia de la precisión y la calidad en cada trabajo. Ya sea que necesites reparar daños en la carrocería de tu vehículo o darle un nuevo acabado a tus espacios, nuestro equipo está listo para superar tus expectativas. \n" +
            "Confía en Latonería y Pintura para obtener resultados excepcionales en todos tus proyectos de latonería y pintura. Estamos comprometidos con la satisfacción del cliente y la excelencia en cada detalle.  \n"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Siempre a tu servicio",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "PENDIENTE en crear",
        instagram: "No",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
