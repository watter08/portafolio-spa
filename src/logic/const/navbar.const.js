export const NavbarInit = {
    NavBrand : {
        Title: 'Portafolio',
        Link:'#'
    },
    Links:[
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
}