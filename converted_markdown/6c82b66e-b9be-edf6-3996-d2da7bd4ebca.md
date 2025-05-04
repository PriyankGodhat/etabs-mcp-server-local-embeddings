

CSI API ETABS v1

# cPropAreaGetNameList Method  
  
---  
  
Retrieves the names of all defined area properties of the specified type.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetNameList(
    	ref int NumberNames,
    	ref string[] MyName,
    	int PropType = 0
    )
    
    
    Function GetNameList ( 
    	ByRef NumberNames As Integer,
    	ByRef MyName As String(),
    	Optional PropType As Integer = 0
    ) As Integer
    
    Dim instance As cPropArea
    Dim NumberNames As Integer
    Dim MyName As String()
    Dim PropType As Integer
    Dim returnValue As Integer
    
    returnValue = instance.GetNameList(NumberNames, 
    	MyName, PropType)
    
    
    int GetNameList(
    	int% NumberNames, 
    	array<String^>^% MyName, 
    	int PropType = 0
    )
    
    
    abstract GetNameList : 
            NumberNames : int byref * 
            MyName : string[] byref * 
            ?PropType : int 
    (* Defaults:
            let _PropType = defaultArg PropType 0
    *)
    -> int 
    

#### Parameters

NumberNames

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
The number of area property names retrieved by the program.

MyName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
One-dimensional array of area property names. The MyName array is created as a
dynamic, zero-based, array by the API user:

Dim MyName() as String

The array is dimensioned to (NumberNames - 1) inside the program, filled with
the names, and returned to the API user.

PropType (Optional)

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This optional value is 0, 1, 2 or 3, indicating the type of area properties
included in the name list.

Value| Type  
---|---  
0| All  
1| Shell  
2| Plane  
3| Asolid  
  
#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the names are successfully retrieved; otherwise it returns
nonzero

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim i As Integer
           Dim NumberNames As Integer
           Dim MyName() As String
    
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
    
       'get area property names
           ret = SapModel.PropArea.GetNameList(NumberNames, MyName)
    
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

