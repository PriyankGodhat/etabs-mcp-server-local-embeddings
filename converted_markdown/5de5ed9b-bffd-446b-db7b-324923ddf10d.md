

CSI API ETABS v1

# cSelectGroup Method  
  
---  
  
Selects or deselects all objects in the specified group.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int Group(
    	string Name,
    	bool Deselect = false
    )
    
    
    Function Group ( 
    	Name As String,
    	Optional Deselect As Boolean = false
    ) As Integer
    
    Dim instance As cSelect
    Dim Name As String
    Dim Deselect As Boolean
    Dim returnValue As Integer
    
    returnValue = instance.Group(Name, Deselect)
    
    
    int Group(
    	String^ Name, 
    	bool Deselect = false
    )
    
    
    abstract Group : 
            Name : string * 
            ?Deselect : bool 
    (* Defaults:
            let _Deselect = defaultArg Deselect false
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing group.

Deselect (Optional)

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the selection is successfully completed, otherwise it returns
nonzero.

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
    
       'select group
           ret = SapModel.SelectObj.Group("ALL")
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cSelect Interface](2acbe9e9-0b14-af63-ad0e-30aff46bf8f7.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

