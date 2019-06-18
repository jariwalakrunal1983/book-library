@ECHO OFF
CLS
ECHO 1.Build Rect Project
ECHO 2.Build Vue Project
ECHO 3.Clean up
ECHO.
CHOICE /C 123 /M "Enter your choice:"

:: Note - list ERRORLEVELS in decreasing order
IF ERRORLEVEL 3 GOTO CleanUp
IF ERRORLEVEL 2 GOTO VueBuild
IF ERRORLEVEL 1 GOTO ReactBuild

:CleanUp
rmdir /s /q web\build\react && rmdir /s /q web\build\vue
GOTO End

:ReactBuild
cd client\react && npm run build && cd ..\.. && xcopy /y /s client\react\build\*.* web\build\react\
GOTO End

:VueBuild
cd client\vue && npm run build && cd ..\..  && xcopy /y /s client\vue\dist\*.* web\build\vue\
GOTO End