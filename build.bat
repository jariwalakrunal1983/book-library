@ECHO OFF
CLS
ECHO 1.Build All
ECHO 2.Build Rect Project
ECHO 3.Build Vue Project
ECHO 4.Build Angular Project
ECHO 5.Clean up
ECHO.
CHOICE /C 12345 /M "Enter your choice:"

:: Note - list ERRORLEVELS in decreasing order
IF ERRORLEVEL 5 GOTO CleanUp
IF ERRORLEVEL 4 GOTO AngularBuild
IF ERRORLEVEL 3 GOTO VueBuild
IF ERRORLEVEL 2 GOTO ReactBuild
IF ERRORLEVEL 1 GOTO BuildAll

:CleanUp
rmdir /s /q web\build\
GOTO End

:AngularBuild
cd client\angular && npm run build && cd ..\.. && xcopy /y /s client\angular\dist\book-library\*.* web\build\angular\
GOTO End

:VueBuild
cd client\vue && npm run build && cd ..\..  && xcopy /y /s client\vue\dist\*.* web\build\vue\
GOTO End

:ReactBuild
cd client\react && npm run build && cd ..\.. && xcopy /y /s client\react\build\*.* web\build\react\
GOTO End

:BuildAll
cd client\react && npm run build && cd ..\.. && xcopy /y /s client\react\build\*.* web\build\react\ && cd client\vue && npm run build && cd ..\.. && xcopy /y /s client\vue\dist\*.* web\build\vue\ && cd client\angular && npm run build && cd ..\.. && xcopy /y /s client\angular\dist\book-library\*.* web\build\angular\
GOTO End