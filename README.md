# proyecto_final
Proyecto Final Marketplace



Primero chequear la rama con comando:
git branch
luego de aqui desde master, hay que moverse a la rama dev:
git checkout dev
esto nos deberioa dejar la rama dev
Desde aqui procederemos con crear nuestra propia rama para cada arreglo o correccion, por ejemplo si voy a trabajar en el navbar seria algo como:
git checkout -b feature/nombre/nombrearreglo
git checkout -b feature/felipe/correccionNavBar
luego de haber realizado los cambios en la rama correspondiente y haberlos comiteados para no perderlos, volveremos a rama dev, donde volveremos a crear una rama esta vez con el nombre "release", por ejemplo:
git checkout dev
git checkout -b release/felipe/correccionNavBar
Una vez posicionados en la rama, realizamos el merge con la rama trabajada y resolvemos los conflictos en caso de haberlos.
git merge --no-ff feature/nombre/funcionalidad
Una vez resueltos los conflictos procedemos a pushear la rama de release asi no afectamos las otras con:
git push origin release/nombre/funcionalidad
una vez realizado esto solicitamos el Merge Request a la rama master despues de las revisiones.

