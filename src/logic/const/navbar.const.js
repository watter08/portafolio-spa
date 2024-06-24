export const NavbarInit = {
    NavBrand : {
        Title: 'Inicio',
        TitleEng: 'Home',
        Link:'/'
    },
    ButtonSearch:{
        Title: 'Buscar',
        TitleEng:'Search',
    },
    Links:[
        {
           IsDropDown: false,
           Title: 'Resumen',
           TitleEng: 'Resume',
           Link:'#Resume',
           Drops:[] 
        },
        {
            IsDropDown: false,
            Title: 'Certificados',
            TitleEng: 'Certificates',
            Link:'#Certificates',
            Drops:[] 
         },
         {
            IsDropDown: true,
            Title: 'Enlaces',
            TitleEng: 'Links',
            Link:'#',
            Drops:[
                {
                    IsDropDown: false,
                    Title: 'Portafolio',
                    TitleEng: 'Briefcase',
                    Link:'#',
                    Drops:[] 
                 },
                 {
                     IsDropDown: false,
                     Title: 'Hoja de Vida',
                     TitleEng: 'Curriculum Vitae',
                     Link:'#',
                     Drops:[] 
                  },
            ] 
         }    
    ]
}