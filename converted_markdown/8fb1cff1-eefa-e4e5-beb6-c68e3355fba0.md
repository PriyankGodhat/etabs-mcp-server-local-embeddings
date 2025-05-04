

CSI API ETABS v1

# cPropFrameSetCoverPlatedI Method  
  
---  
  
Initializes a cover plated I-type frame section property. If this function is
called for an existing frame section property, all items for the section are
reset to their default value.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetCoverPlatedI(
    	string Name,
    	string SectName,
    	double FyTopFlange,
    	double FyWeb,
    	double FyBotFlange,
    	double Tc,
    	double Bc,
    	string MatPropTop,
    	double Tcb,
    	double Bcb,
    	string MatPropBot,
    	int Color = -1,
    	string Notes = "",
    	string GUID = ""
    )
    
    
    Function SetCoverPlatedI ( 
    	Name As String,
    	SectName As String,
    	FyTopFlange As Double,
    	FyWeb As Double,
    	FyBotFlange As Double,
    	Tc As Double,
    	Bc As Double,
    	MatPropTop As String,
    	Tcb As Double,
    	Bcb As Double,
    	MatPropBot As String,
    	Optional Color As Integer = -1,
    	Optional Notes As String = "",
    	Optional GUID As String = ""
    ) As Integer
    
    Dim instance As cPropFrame
    Dim Name As String
    Dim SectName As String
    Dim FyTopFlange As Double
    Dim FyWeb As Double
    Dim FyBotFlange As Double
    Dim Tc As Double
    Dim Bc As Double
    Dim MatPropTop As String
    Dim Tcb As Double
    Dim Bcb As Double
    Dim MatPropBot As String
    Dim Color As Integer
    Dim Notes As String
    Dim GUID As String
    Dim returnValue As Integer
    
    returnValue = instance.SetCoverPlatedI(Name, 
    	SectName, FyTopFlange, FyWeb, FyBotFlange, 
    	Tc, Bc, MatPropTop, Tcb, Bcb, MatPropBot, 
    	Color, Notes, GUID)
    
    
    int SetCoverPlatedI(
    	String^ Name, 
    	String^ SectName, 
    	double FyTopFlange, 
    	double FyWeb, 
    	double FyBotFlange, 
    	double Tc, 
    	double Bc, 
    	String^ MatPropTop, 
    	double Tcb, 
    	double Bcb, 
    	String^ MatPropBot, 
    	int Color = -1, 
    	String^ Notes = L"", 
    	String^ GUID = L""
    )
    
    
    abstract SetCoverPlatedI : 
            Name : string * 
            SectName : string * 
            FyTopFlange : float * 
            FyWeb : float * 
            FyBotFlange : float * 
            Tc : float * 
            Bc : float * 
            MatPropTop : string * 
            Tcb : float * 
            Bcb : float * 
            MatPropBot : string * 
            ?Color : int * 
            ?Notes : string * 
            ?GUID : string 
    (* Defaults:
            let _Color = defaultArg Color -1
            let _Notes = defaultArg Notes ""
            let _GUID = defaultArg GUID ""
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing or new frame section property. If this is an existing
property, that property is modified; otherwise, a new property is added.

SectName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

FyTopFlange

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The yield strength of the top flange of the I-section. [F/L2]

If this item is 0, the yield strength of the I-section specified by the
SectName item is used.

FyWeb

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The yield strength of the web of the I-section. [F/L2]

If this item is 0, the yield strength of the I-section specified by the
SectName item is used.

FyBotFlange

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The yield strength of the bottom flange of the I-section. [F/L2]

If this item is 0, the yield strength of the I-section specified by the
SectName item is used.

Tc

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

Bc

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

MatPropTop

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of the material property for the bottom cover plate.

This item applies only if both the tcb and the bcb items are greater than 0.

Tcb

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

Bcb

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

MatPropBot

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of the material property for the bottom cover plate.

This item applies only if both the tcb and the bcb items are greater than 0.

Color (Optional)

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

Notes (Optional)

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

GUID (Optional)

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The GUID (global unique identifier), if any, assigned to the section. If this
item is input as Default, the program assigns a GUID to the section.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the section property is successfully initialized; otherwise it
returns a nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
    
       'create ETABS object
           Dim myHelper as cHelper = New Helper
           EtabsObject = myHelper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    
       'start ETABS application
           ret = EtabsObject.ApplicationStart()
    
       'create SapModel object
           SapModel = EtabsObject.SapModel
    
       'initialize model
           ret = SapModel.InitializeNewModel()
    
       'create steel deck template model
           ret = SapModel.File.NewSteelDeck(4,12,12,4,4,24,24)
    
       'set new I-type frame section property
           ret = SapModel.PropFrame.SetISection("ISEC", "A992Fy50", 24, 8, 0.5, 0.3, 8, 0.5)
    
       'set new cover plated I-type frame section property
           ret = SapModel.PropFrame.SetCoverPlatedI("CPI1", "ISEC", 0, 36, 0, 0.75, 14, "A992Fy50", 0.5, 6, "A992Fy50")
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropFrame Interface](818573fe-2b13-6183-8dc9-0cf3e8e02c7a.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

