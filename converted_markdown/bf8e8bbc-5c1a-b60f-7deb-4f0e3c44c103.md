

CSI API ETABS v1

# cTowerDeleteTower Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int DeleteTower(
    	string TowerName,
    	bool Associate,
    	string AssocWithTower = ""
    )
    
    
    Function DeleteTower ( 
    	TowerName As String,
    	Associate As Boolean,
    	Optional AssocWithTower As String = ""
    ) As Integer
    
    Dim instance As cTower
    Dim TowerName As String
    Dim Associate As Boolean
    Dim AssocWithTower As String
    Dim returnValue As Integer
    
    returnValue = instance.DeleteTower(TowerName, 
    	Associate, AssocWithTower)
    
    
    int DeleteTower(
    	String^ TowerName, 
    	bool Associate, 
    	String^ AssocWithTower = L""
    )
    
    
    abstract DeleteTower : 
            TowerName : string * 
            Associate : bool * 
            ?AssocWithTower : string 
    (* Defaults:
            let _AssocWithTower = defaultArg AssocWithTower ""
    *)
    -> int 
    

#### Parameters

TowerName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

Associate

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

AssocWithTower (Optional)

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cTower Interface](1bb0c5f8-7995-5710-920d-d085c36229bc.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

