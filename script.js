new Vue({
    el: '#app',
    data: {
        nuevoContacto: {
            nombre: '',
            telefono: '',
            categoria: 'Familiar'
        },
        contactos: []
    },
    computed: {
        totalMensajes() {
            return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.telefono) {
                this.contactos.push({
             nombre: this.nuevoContacto.nombre,
          telefono: this.nuevoContacto.telefono,
            categoria: this.nuevoContacto.categoria,
           mensajes: 0,
                    llamadas: 0
                });
                this.nuevoContacto.nombre = '';
                this.nuevoContacto.telefono = '';
                this.nuevoContacto.categoria = 'Familiar';
            } else {
                alert('Por favor, complete todos los campos.');
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        modificarMensajes(contacto, cantidad) {
            if (contacto.mensajes + cantidad >= 0 && contacto.mensajes + cantidad <= 25) {
              contacto.mensajes += cantidad;
            }
        },
        modificarLlamadas(contacto, cantidad) {
            if (contacto.llamadas + cantidad >= 0 && contacto.llamadas + cantidad <= 15) {
             contacto.llamadas += cantidad;
            }
        }
    }
});
