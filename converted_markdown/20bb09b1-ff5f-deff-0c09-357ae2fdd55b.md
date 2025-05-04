

CSI API ETABS v1

# cAreaElmGetProperty Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetProperty(
    	string Name,
    	ref string PropName
    )
    
    
    Function GetProperty ( 
    	Name As String,
    	ByRef PropName As String
    ) As Integer
    
    Dim instance As cAreaElm
    Dim Name As String
    Dim PropName As String
    Dim returnValue As Integer
    
    returnValue = instance.GetProperty(Name, 
    	PropName)
    
    
    int GetProperty(
    	String^ Name, 
    	String^% PropName
    )
    
    
    abstract GetProperty : 
            Name : string * 
            PropName : string byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

PropName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cAreaElm Interface](acb57064-1690-8643-a153-8afe57d5852d.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

