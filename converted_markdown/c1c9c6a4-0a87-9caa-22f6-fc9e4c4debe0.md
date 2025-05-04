

CSI API ETABS v1

# cDesignShearWallGetSpandrelSummaryResults Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetSpandrelSummaryResults(
    	ref string[] Story,
    	ref string[] Spandrel,
    	ref string[] Station,
    	ref double[] TopRebar,
    	ref double[] TopRebarRatio,
    	ref string[] TopRebarCombo,
    	ref double[] MuTop,
    	ref double[] BotRebar,
    	ref double[] BotRebarRatio,
    	ref string[] BotRebarCombo,
    	ref double[] MuBot,
    	ref double[] AVert,
    	ref double[] AHorz,
    	ref string[] ShearCombo,
    	ref double[] Vu,
    	ref double[] ADiag,
    	ref string[] ShearDiagCombo,
    	ref double[] VuDiag,
    	ref string[] WarnMsg,
    	ref string[] ErrMsg
    )
    
    
    Function GetSpandrelSummaryResults ( 
    	ByRef Story As String(),
    	ByRef Spandrel As String(),
    	ByRef Station As String(),
    	ByRef TopRebar As Double(),
    	ByRef TopRebarRatio As Double(),
    	ByRef TopRebarCombo As String(),
    	ByRef MuTop As Double(),
    	ByRef BotRebar As Double(),
    	ByRef BotRebarRatio As Double(),
    	ByRef BotRebarCombo As String(),
    	ByRef MuBot As Double(),
    	ByRef AVert As Double(),
    	ByRef AHorz As Double(),
    	ByRef ShearCombo As String(),
    	ByRef Vu As Double(),
    	ByRef ADiag As Double(),
    	ByRef ShearDiagCombo As String(),
    	ByRef VuDiag As Double(),
    	ByRef WarnMsg As String(),
    	ByRef ErrMsg As String()
    ) As Integer
    
    Dim instance As cDesignShearWall
    Dim Story As String()
    Dim Spandrel As String()
    Dim Station As String()
    Dim TopRebar As Double()
    Dim TopRebarRatio As Double()
    Dim TopRebarCombo As String()
    Dim MuTop As Double()
    Dim BotRebar As Double()
    Dim BotRebarRatio As Double()
    Dim BotRebarCombo As String()
    Dim MuBot As Double()
    Dim AVert As Double()
    Dim AHorz As Double()
    Dim ShearCombo As String()
    Dim Vu As Double()
    Dim ADiag As Double()
    Dim ShearDiagCombo As String()
    Dim VuDiag As Double()
    Dim WarnMsg As String()
    Dim ErrMsg As String()
    Dim returnValue As Integer
    
    returnValue = instance.GetSpandrelSummaryResults(Story, 
    	Spandrel, Station, TopRebar, TopRebarRatio, 
    	TopRebarCombo, MuTop, BotRebar, BotRebarRatio, 
    	BotRebarCombo, MuBot, AVert, AHorz, 
    	ShearCombo, Vu, ADiag, ShearDiagCombo, 
    	VuDiag, WarnMsg, ErrMsg)
    
    
    int GetSpandrelSummaryResults(
    	array<String^>^% Story, 
    	array<String^>^% Spandrel, 
    	array<String^>^% Station, 
    	array<double>^% TopRebar, 
    	array<double>^% TopRebarRatio, 
    	array<String^>^% TopRebarCombo, 
    	array<double>^% MuTop, 
    	array<double>^% BotRebar, 
    	array<double>^% BotRebarRatio, 
    	array<String^>^% BotRebarCombo, 
    	array<double>^% MuBot, 
    	array<double>^% AVert, 
    	array<double>^% AHorz, 
    	array<String^>^% ShearCombo, 
    	array<double>^% Vu, 
    	array<double>^% ADiag, 
    	array<String^>^% ShearDiagCombo, 
    	array<double>^% VuDiag, 
    	array<String^>^% WarnMsg, 
    	array<String^>^% ErrMsg
    )
    
    
    abstract GetSpandrelSummaryResults : 
            Story : string[] byref * 
            Spandrel : string[] byref * 
            Station : string[] byref * 
            TopRebar : float[] byref * 
            TopRebarRatio : float[] byref * 
            TopRebarCombo : string[] byref * 
            MuTop : float[] byref * 
            BotRebar : float[] byref * 
            BotRebarRatio : float[] byref * 
            BotRebarCombo : string[] byref * 
            MuBot : float[] byref * 
            AVert : float[] byref * 
            AHorz : float[] byref * 
            ShearCombo : string[] byref * 
            Vu : float[] byref * 
            ADiag : float[] byref * 
            ShearDiagCombo : string[] byref * 
            VuDiag : float[] byref * 
            WarnMsg : string[] byref * 
            ErrMsg : string[] byref -> int 
    

#### Parameters

Story

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

Spandrel

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

Station

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

TopRebar

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

TopRebarRatio

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

TopRebarCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

MuTop

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

BotRebar

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

BotRebarRatio

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

BotRebarCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

MuBot

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

AVert

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

AHorz

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

ShearCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

Vu

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

ADiag

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

ShearDiagCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

VuDiag

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

WarnMsg

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

ErrMsg

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDesignShearWall Interface](f07e2722-5225-a490-780a-6779388d5216.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

