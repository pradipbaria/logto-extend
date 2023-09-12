const sign_up_and_sign_in = {
  identifiers_email: 'Dirección de correo electrónico',
  identifiers_phone: 'Número de teléfono',
  identifiers_username: 'Nombre de usuario',
  identifiers_email_or_sms: 'Dirección de correo electrónico o número de teléfono',
  identifiers_none: 'No aplicable',
  and: 'y',
  or: 'o',
  sign_up: {
    title: 'REGISTRARSE',
    sign_up_identifier: 'Identificador de registro',
    identifier_description:
      'El identificador de registro es necesario para la creación de la cuenta y debe incluirse en la pantalla de inicio de sesión.',
    sign_up_authentication: 'Configuración de autenticación para el registro',
    authentication_description:
      'Todas las acciones seleccionadas serán obligatorias para que los usuarios completen el proceso.',
    set_a_password_option: 'Crea una contraseña',
    verify_at_sign_up_option: 'Verificar al registrarse',
    social_only_creation_description:
      '(Esto se aplica solo a la creación de cuentas mediante redes sociales)',
  },
  sign_in: {
    title: 'INICIAR SESIÓN',
    sign_in_identifier_and_auth:
      'Identificador y configuración de autenticación para iniciar sesión',
    description:
      'Los usuarios pueden iniciar sesión usando cualquiera de las opciones disponibles. Ajusta el diseño arrastrando y soltando las opciones a continuación.',
    add_sign_in_method: 'Agregar método de inicio de sesión',
    password_auth: 'Contraseña',
    verification_code_auth: 'Código de verificación',
    auth_swap_tip:
      'Intercambia las opciones a continuación para determinar cuál aparece primero en el proceso.',
    require_auth_factor: 'Debes seleccionar al menos un factor de autenticación.',
  },
  social_sign_in: {
    title: 'INICIO DE SESIÓN SOCIAL',
    social_sign_in: 'Inicio de sesión social',
    description:
      'Dependiendo del identificador obligatorio que hayas establecido, se puede solicitar al usuario que proporcione un identificador al registrarse mediante un conector social.',
    add_social_connector: 'Agregar conector social',
    set_up_hint: {
      not_in_list: '¿No está en la lista?',
      set_up_more: 'Configura',
      go_to: 'otros conectores sociales ahora.',
    },
  },
  tip: {
    set_a_password:
      'Es esencial que se establezca una contraseña única para que coincida con tu nombre de usuario.',
    verify_at_sign_up:
      'Actualmente solo admitimos correo electrónico verificado. Tu base de usuarios puede contener un gran número de direcciones de correo electrónico de baja calidad si no se valida.',
    password_auth:
      'Es esencial ya que has habilitado la opción de establecer una contraseña durante el proceso de registro.',
    verification_code_auth:
      'Es esencial ya que solo has habilitado la opción de proporcionar un código de verificación al registrarse. Se puede desactivar la opción si se permite la configuración de contraseña durante el proceso de registro.',
    delete_sign_in_method:
      'Es esencial ya que has seleccionado {{identifier}} como identificador obligatorio.',
  },
  advanced_options: {
    /** UNTRANSLATED */
    title: 'ADVANCED OPTIONS',
    /** UNTRANSLATED */
    enable_user_registration: 'Enable user registration',
    /** UNTRANSLATED */
    enable_user_registration_description:
      'Enable or disallow user registration. Once disabled, users can still be added in the admin console but users can no longer establish accounts through the sign-in UI.',
  },
};

export default Object.freeze(sign_up_and_sign_in);
