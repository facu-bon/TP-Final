
const contacts = [
    {
        id: 1,
        user_id: 1,
        name: 'Pedro',
        profile_picture: 'https://cdn.miiwiki.org/8/85/Default_Male_Mii.png',
        last_connection: 'hoy 14:50',
        is_connected: false,
        messages: [
            {
                id: 1,
                content: 'Hola que tal',
                author_id: 1,
                author_name: "Pedro",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 2,
        user_id: 2,
        name: 'Daniela',
        profile_picture: 'https://forum.pretendo.network/uploads/default/original/2X/d/d872020368695c72e4260cc5ae0d1f1626476685.png',
        last_connection: 'hoy 16:50',
        is_connected: false,
        messages: [
            {
                id: 2,
                content: 'Todo bien',
                author_id: 2,
                author_name: "Daniela",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 3,
        user_id: 3,
        name: 'Marcos Dev',
        profile_picture: 'https://forum.pretendo.network/uploads/default/original/2X/a/ae29210a011afef121c48955b98115845f6213ce.png',
        last_connection: 'En línea',
        is_connected: true,
        messages: [
            {
                id: 3,
                content: 'Ya subí los cambios al repo, fijate si compila.',
                author_id: 3,
                author_name: "Marcos Dev",
                created_at: 'Ahora',
                status: 'UNREAD'
            }
        ]
    },
    {
        id: 4,
        user_id: 4,
        name: 'Sofía Diseño',
        profile_picture: 'https://forum.pretendo.network/uploads/default/original/2X/c/cb4c9b61f9d44f50d497fce5e8ee94c40d70f24b.jpeg',
        last_connection: 'hoy 10:30',
        is_connected: false,
        messages: [
            {
                id: 4,
                content: 'Te paso los mockups en un rato.',
                author_id: 4,
                author_name: "Sofía Diseño",
                created_at: '10:30',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 5,
        user_id: 5,
        name: 'Carlos',
        profile_picture: 'https://i.pinimg.com/736x/15/98/e7/1598e7633ac1dec8aa6164076ed39f76.jpg',
        last_connection: 'ayer 22:15',
        is_connected: false,
        messages: [
            {
                id: 5,
                content: 'Falta uno para el jueves, ¿quién se suma?',
                author_id: 10, 
                author_name: "Lucas",
                created_at: 'Ayer',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 6,
        user_id: 6,
        name: 'Mamá',
        profile_picture: 'https://cdn.miiwiki.org/2/2b/Default_Female_Mii.png',
        last_connection: 'hoy 09:00',
        is_connected: false,
        messages: [
            {
                id: 6,
                content: '¿Vas a venir a comer el domingo?',
                author_id: 6,
                author_name: "Mamá",
                created_at: '09:00',
                status: 'DELIVERED'
            }
        ]
    },
    {
        id: 7,
        user_id: 7,
        name: 'Soporte Técnico',
        profile_picture: 'https://w7.pngwing.com/pngs/1024/610/png-transparent-black-gear-gear-mechanism-sprocket-mechanics-gears-miscellaneous-transport-gear-train-thumbnail.png',
        last_connection: 'martes 15:00',
        is_connected: false,
        messages: [
            {
                id: 7,
                content: 'Su ticket ha sido cerrado exitosamente.',
                author_id: 7,
                author_name: "Soporte Técnico",
                created_at: 'Martes',
                status: 'VIEWED'
            }
        ]
    }

]

export default contacts