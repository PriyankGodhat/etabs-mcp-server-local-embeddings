

CSI API ETABS v1

# cPropMaterialGetORebar_1 Method  
  
---  
  
Retrieves the other material property data for rebar materials.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetORebar_1(
    	string Name,
    	ref double Fy,
    	ref double Fu,
    	ref double EFy,
    	ref double EFu,
    	ref int SSType,
    	ref int SSHysType,
    	ref double StrainAtHardening,
    	ref double StrainUltimate,
    	ref double FinalSlope,
    	ref bool UseCaltransSSDefaults,
    	double Temp = 0
    )
    
    
    Function GetORebar_1 ( 
    	Name As String,
    	ByRef Fy As Double,
    	ByRef Fu As Double,
    	ByRef EFy As Double,
    	ByRef EFu As Double,
    	ByRef SSType As Integer,
    	ByRef SSHysType As Integer,
    	ByRef StrainAtHardening As Double,
    	ByRef StrainUltimate As Double,
    	ByRef FinalSlope As Double,
    	ByRef UseCaltransSSDefaults As Boolean,
    	Optional Temp As Double = 0
    ) As Integer
    
    Dim instance As cPropMaterial
    Dim Name As String
    Dim Fy As Double
    Dim Fu As Double
    Dim EFy As Double
    Dim EFu As Double
    Dim SSType As Integer
    Dim SSHysType As Integer
    Dim StrainAtHardening As Double
    Dim StrainUltimate As Double
    Dim FinalSlope As Double
    Dim UseCaltransSSDefaults As Boolean
    Dim Temp As Double
    Dim returnValue As Integer
    
    returnValue = instance.GetORebar_1(Name, 
    	Fy, Fu, EFy, EFu, SSType, SSHysType, 
    	StrainAtHardening, StrainUltimate, 
    	FinalSlope, UseCaltransSSDefaults, 
    	Temp)
    
    
    int GetORebar_1(
    	String^ Name, 
    	double% Fy, 
    	double% Fu, 
    	double% EFy, 
    	double% EFu, 
    	int% SSType, 
    	int% SSHysType, 
    	double% StrainAtHardening, 
    	double% StrainUltimate, 
    	double% FinalSlope, 
    	bool% UseCaltransSSDefaults, 
    	double Temp = 0
    )
    
    
    abstract GetORebar_1 : 
            Name : string * 
            Fy : float byref * 
            Fu : float byref * 
            EFy : float byref * 
            EFu : float byref * 
            SSType : int byref * 
            SSHysType : int byref * 
            StrainAtHardening : float byref * 
            StrainUltimate : float byref * 
            FinalSlope : float byref * 
            UseCaltransSSDefaults : bool byref * 
            ?Temp : float 
    (* Defaults:
            let _Temp = defaultArg Temp 0
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing rebar material property.

Fy

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

Fu

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The minimum tensile stress. [F/L2]

EFy

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

EFu

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

SSType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is 0, 1 or 2, indicating the stress-strain curve type.

Value| SSType  
---|---  
0| User defined  
1| Parametric - Simple  
2| Parametric - Park  
  
SSHysType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is 0 through 7, indicating the stress-strain curve type.

Value| SSHysType  
---|---  
0| Elastic  
1| Kinematic  
2| Takeda  
3| Pivot  
4| Concrete  
5| BRB Hardening  
6| Degrading  
7| Isotropic  
  
StrainAtHardening

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This item applies only when parametric stress-strain curves are used and when
UseCaltransSSDefaults is False. It is the strain at the onset of strain
hardening.

StrainUltimate

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This item applies only when parametric stress-strain curves are used and when
UseCaltransSSDefaults is False. It is the ultimate strain capacity. This item
must be larger than the StrainAtHardening item.

FinalSlope

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This item applies only to parametric stress-strain curves. It is a multiplier
on the material modulus of elasticity, E. This value multiplied times E gives
the final slope of the curve.

UseCaltransSSDefaults

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  
If this item is True, the program uses Caltrans default controlling strain
values, which are bar size dependent.

Temp (Optional)

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The temperature at which the specified data is to be retrieved. The
temperature must have been defined previously for the material.

This item applies only if the specified material has properties that are
temperature dependent. That is, it applies only if properties are specified
for the material at more than one temperature.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the data is successfully retrieved; otherwise it returns a
nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim Fy As Double
           Dim Fu As Double
           Dim eFy As Double
           Dim eFu As Double
           Dim SSType As Integer
           Dim SSHysType As Integer
           Dim StrainAtHardening As Double
           Dim StrainUltimate As Double
           Dim FinalSlope As Double
           Dim UseCaltransSSDefaults As Boolean
    
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
    
       'initialize new material property
           ret = SapModel.PropMaterial.SetMaterial("Rebar", eMatType.Rebar)
    
       'assign other properties
           ret = SapModel.PropMaterial.SetORebar_1("Rebar", 62, 93, 70, 102, 2, 2, 0.02, 0.1, -0.1, False)
    
       'get other properties
           ret = SapModel.PropMaterial.GetORebar_1("Rebar", Fy, Fu, eFy, eFu, SSType, SSHysType, StrainAtHardening, StrainUltimate, FinalSlope, UseCaltransSSDefaults)
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropMaterial Interface](9c207615-6f75-9e34-741c-041d0b2ac537.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

