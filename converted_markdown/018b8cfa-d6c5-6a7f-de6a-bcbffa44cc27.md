

CSI API ETABS v1

# cPropAreaCount Method  
  
---  
  
Returns the total number of defined area properties in the model. If desired,
counts can be returned for all area properties of a specified type in the
model.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int Count(
    	int PropType = 0
    )
    
    
    Function Count ( 
    	Optional PropType As Integer = 0
    ) As Integer
    
    Dim instance As cPropArea
    Dim PropType As Integer
    Dim returnValue As Integer
    
    returnValue = instance.Count(PropType)
    
    
    int Count(
    	int PropType = 0
    )
    
    
    abstract Count : 
            ?PropType : int 
    (* Defaults:
            let _PropType = defaultArg PropType 0
    *)
    -> int 
    

#### Parameters

PropType (Optional)

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This optional value is 0, 1, 2 or 3, indicating the type of area properties
included in the count.

Value| Type  
---|---  
0| All  
1| Shell  
2| Plane  
3| Asolid  
  
#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
The total number of defined area properties in the model.

![](../icons/SectionExpanded.png)Remarks

Plane and Asolid area properties are not supported in ETABS.

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim Count as Integer
    
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
    
       'return number of defined area properties of all types
           Count = SapModel.PropArea.Count
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropArea Interface](05202e19-1948-3d93-0a27-426378bde769.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

