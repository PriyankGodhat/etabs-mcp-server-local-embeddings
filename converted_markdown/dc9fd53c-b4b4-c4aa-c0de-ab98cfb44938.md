

CSI API ETABS v1

# cPropFrameGetTypeOAPI Method  
  
---  
  
Retrieves the property type for the specified frame section property.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetTypeOAPI(
    	string Name,
    	ref eFramePropType PropType
    )
    
    
    Function GetTypeOAPI ( 
    	Name As String,
    	ByRef PropType As eFramePropType
    ) As Integer
    
    Dim instance As cPropFrame
    Dim Name As String
    Dim PropType As eFramePropType
    Dim returnValue As Integer
    
    returnValue = instance.GetTypeOAPI(Name, 
    	PropType)
    
    
    int GetTypeOAPI(
    	String^ Name, 
    	eFramePropType% PropType
    )
    
    
    abstract GetTypeOAPI : 
            Name : string * 
            PropType : eFramePropType byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing frame section property.

PropType

    Type: [ETABSv1eFramePropType](3312d7ab-26be-8f69-cadf-864c0a296605.htm)  
This is one of the items in the
[eFramePropType](3312d7ab-26be-8f69-cadf-864c0a296605.htm) enumeration.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the type is successfully retrieved; otherwise it returns
nonzero.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim PropType As eFramePropType
    
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
    
       'get frame property type
           ret = SapModel.PropFrame.GetTypeOAPI("FSEC1", PropType)
    
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

