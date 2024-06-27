export const NavbarInit = {
    ES:{
        NavBrand : {
            Title: 'Inicio',
            Link:'/'
        },
        ButtonSearch:'Buscar',
        Links:[
            {
                IsDropDown: false,
                Title: 'Resumen',
                Link:'#Resume',
                Drops:[] 
             },
             {
                IsDropDown: false,
                Title: 'Certificados',
                Link:'#Certificates',
                Drops:[] 
             },
             {
                IsDropDown: true,
                Title: 'Enlaces',
                Link:'#',
                Drops:[
                    {
                        IsDropDown: false,
                        Title: 'Portafolio',
                        Link:'#',
                        Drops:[] 
                     },
                     {
                         IsDropDown: false,
                         Title: 'Hoja de Vida',
                         Link:'#',
                         Drops:[] 
                      },
                ] 
             }
        ]
    },
    EN:{
        NavBrand : {
            Title: 'Home',
            Link:'/'
        },
        ButtonSearch:'Home',
        Links:[
            {
                IsDropDown: false,
                Title: 'Resume',
                Link:'#Resume',
                Drops:[] 
             },
             {
                IsDropDown: false,
                Title: 'Certificates',
                Link:'#Certificates',
                Drops:[] 
             },
             {
                IsDropDown: true,
                Title: 'Links',
                Link:'#',
                Drops:[
                    {
                        IsDropDown: false,
                        Title: 'Briefcase',
                        Link:'#',
                        Drops:[] 
                     },
                     {
                         IsDropDown: false,
                         Title: 'Curriculum Vitae',
                         Link:'#',
                         Drops:[] 
                      },
                ] 
             }
        ]
    }
}