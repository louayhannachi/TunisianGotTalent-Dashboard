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
  },
  'event': {
    'events':{
    'getAll':'/tgt/event/getAll',
    'getById':'/tgt/event/getById/{0}',
    'create':'/tgt/event/create',
    'edit':'/tgt/event/edit/{0}',
    'delete':'/tgt/event/delete/{0}',
    'participer':'/tgt/event/participer/{0}'
    },
    'category':{
      'getAll' : '/tgt/categoryevent/',
      'delete': '/tgt/categoryevent/delete/{0}',
      'create': '/tgt/categoryevent/create'
    },
  },
  'business': {
    
  },
  'forum': {
    
  },
  'competition': {
    
  }
}