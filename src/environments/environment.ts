// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false
};

export const wsUrl = {
  'authentification':{
    'user':'tgt/talent/user/loginAdminUser'
  },
  'talent': {
    'getLikesPerProfil': '/tgt/talent/profil/countLikes',
    'getCommentsPerProfil': '/tgt/talent/profil/countComments',
    'getrateMoyenne': '/tgt/talent/profil/getMoyenneRate',
  },
  'event': {
    'events':{
    'getAll':'/tgt/event/getAll',
    'getById':'/tgt/event/getById/{0}',
    'create':'/tgt/event/create',
    'edit':'/tgt/event/edit',
    'delete':'/tgt/event/delete/{0}',
    'participer':'/tgt/event/participer/{0}'
    },
    'category':{
      'getAll' : '/tgt/categoryevent/',
      'delete': '/tgt/categoryevent/delete/{0}',
      'create': '/tgt/categoryevent/new',
      'getById': '/tgt/categoryevent/show/{0}',
      'edit': '/tgt/categoryevent/edit'
    },
  },
  'business': {
    'getEntrepriseById':"/tgt/sponsoring/afficherEntrepriseByEvent/{0}",
    'getAllEntreprise':"/tgt/sponsoring/afficherEntreprise",
    'supprimerEntreprise':"/tgt/sponsoring/supprimerEntreprise/{0}",
    'allSponsorise':"/tgt/sponsoring/afficherSponsorise",
    
  },
  'forum': {
   'delete': '/tgt/article/delete/{id}'
  },
  'competition': {
    
  }
}