export const Path_page = {
  HOME: '/',
  US: '/nosotros',
  SERVICES: '/servicios',
  STORE: '/tienda',
  CONTACT: '/contact',
  PROFILE: '/perfil',
  TERMSANDCONDITIONS: '/terminos-y-condiciones',
  PAYMENTS: 'perfil/pagos',
  ERROR: '*'
};

export const Slug = ( t ) => {
   return  t.replaceAll( ' ', '-' ).toLowerCase();
};