

CSI API ETABS v1

# cPropMaterialGetTemp Method  
  
---  
  
Retrieves the temperatures at which properties are specified for a material.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetTemp(
    	string Name,
    	ref int NumberItems,
    	ref double[] Temp
    )
    
    
    Function GetTemp ( 
    	Name As String,
    	ByRef NumberItems As Integer,
    	ByRef Temp As Double()
    ) As Integer
    
    Dim instance As cPropMaterial
    Dim Name As String
    Dim NumberItems As Integer
    Dim Temp As Double()
    Dim returnValue As Integer
    
    returnValue = instance.GetTemp(Name, NumberItems, 
    	Temp)
    
    
    int GetTemp(
    	String^ Name, 
    	int% NumberItems, 
    	array<double>^% Temp
    )
    
    
    abstract GetTemp : 
            Name : string * 
            NumberItems : int byref * 
            Temp : float[] byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of a material property.

NumberItems

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
The number of different temperatures at which properties are specified for the
material.

Temp

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the different temperatures at which properties
are specified for the material.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the temperatures are successfully retrieved; otherwise it
returns a nonzero value

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim NumberItems As Integer
           Dim MyTemp() As Double
           Dim Temp() As Double
    
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
           ret = SapModel.PropMaterial.SetMaterial("Steel", eMatType.Steel)
    
       'specify temps at which properties will be provided
           ReDim MyTemp(2)
           MyTemp(0) = 0
           MyTemp(1) = 50
           MyTemp(2) = 100
           ret = SapModel.PropMaterial.SetTemp("Steel", 3, MyTemp)
    
       'get temps at which properties are provided
           ret = SapModel.PropMaterial.GetTemp("Steel", NumberItems, Temp)   
    
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

