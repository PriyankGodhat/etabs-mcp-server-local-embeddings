

CSI API ETABS v1

# cPointObjCountLoadForce Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int CountLoadForce(
    	ref int Count,
    	string Name = "",
    	string LoadPat = ""
    )
    
    
    Function CountLoadForce ( 
    	ByRef Count As Integer,
    	Optional Name As String = "",
    	Optional LoadPat As String = ""
    ) As Integer
    
    Dim instance As cPointObj
    Dim Count As Integer
    Dim Name As String
    Dim LoadPat As String
    Dim returnValue As Integer
    
    returnValue = instance.CountLoadForce(Count, 
    	Name, LoadPat)
    
    
    int CountLoadForce(
    	int% Count, 
    	String^ Name = L"", 
    	String^ LoadPat = L""
    )
    
    
    abstract CountLoadForce : 
            Count : int byref * 
            ?Name : string * 
            ?LoadPat : string 
    (* Defaults:
            let _Name = defaultArg Name ""
            let _LoadPat = defaultArg LoadPat ""
    *)
    -> int 
    

#### Parameters

Count

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

Name (Optional)

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

LoadPat (Optional)

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

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

