

CSI API ETABS v1

# cPointObjSetMassByWeight Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetMassByWeight(
    	string Name,
    	ref double[] M,
    	eItemType ItemType = eItemType.Objects,
    	bool IsLocalCSys = true,
    	bool Replace = false
    )
    
    
    Function SetMassByWeight ( 
    	Name As String,
    	ByRef M As Double(),
    	Optional ItemType As eItemType = eItemType.Objects,
    	Optional IsLocalCSys As Boolean = true,
    	Optional Replace As Boolean = false
    ) As Integer
    
    Dim instance As cPointObj
    Dim Name As String
    Dim M As Double()
    Dim ItemType As eItemType
    Dim IsLocalCSys As Boolean
    Dim Replace As Boolean
    Dim returnValue As Integer
    
    returnValue = instance.SetMassByWeight(Name, 
    	M, ItemType, IsLocalCSys, Replace)
    
    
    int SetMassByWeight(
    	String^ Name, 
    	array<double>^% M, 
    	eItemType ItemType = eItemType::Objects, 
    	bool IsLocalCSys = true, 
    	bool Replace = false
    )
    
    
    abstract SetMassByWeight : 
            Name : string * 
            M : float[] byref * 
            ?ItemType : eItemType * 
            ?IsLocalCSys : bool * 
            ?Replace : bool 
    (* Defaults:
            let _ItemType = defaultArg ItemType eItemType.Objects
            let _IsLocalCSys = defaultArg IsLocalCSys true
            let _Replace = defaultArg Replace false
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

M

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

ItemType (Optional)

    Type: [ETABSv1eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm)  

IsLocalCSys (Optional)

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

Replace (Optional)

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPointObj Interface](07661691-ffa8-f77b-7580-1973c7be1978.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

