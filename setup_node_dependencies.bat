cd web && npm install && cd.. && cd client\react && npm install && npm run build && cd ..\.. && xcopy /y /s client\react\build\*.* web\build\react\ && cd client\vue && npm install && npm run build && cd ..\.. && xcopy /y /s client\vue\dist\*.* web\build\vue\ && cd client\angular && npm install && npm run build && cd ..\.. && xcopy /y /s client\angular\dist\book-library\*.* web\build\angular\