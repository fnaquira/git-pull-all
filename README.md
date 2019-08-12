# Script para pullear varios repositorios al mismo tiempo

En el archivo repos se debe detallar los repositorios, el nombre del branch y el nombre de la carpeta donde está clonado.

```
[
	{
		"url": "https://github.com/fnaquira/nodeAsWindowsService",
		"branch": "master",
		"path": "nodeAsWindowsService"
	},
	{
		"url": "https://git.conflux.pe/js/conflux-admin-react",
		"branch": "master",
		"path": "conflux-admin-react"
	}
]
```

Luego, al ejecutar **node index.js**, el script se encargará de clonar, hacer checkout o pullear todos los repositorios según sea necesario.
