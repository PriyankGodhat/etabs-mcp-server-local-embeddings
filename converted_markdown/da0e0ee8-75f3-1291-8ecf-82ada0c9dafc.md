

CSI API ETABS v1

# cPropRebarGetNameList Method  
  
---  
  
Retrieves the names of all defined rebar properties

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
    	ref string[] MyName
    )
    
    
    Function GetNameList ( 
    	ByRef NumberNames As Integer,
    	ByRef MyName As String()
    ) As Integer
    
    Dim instance As cPropRebar
    Dim NumberNames As Integer
    Dim MyName As String()
    Dim returnValue As Integer
    
    returnValue = instance.GetNameList(NumberNames, 
    	MyName)
    
    
    int GetNameList(
    	int% NumberNames, 
    	array<String^>^% MyName
    )
    
    
    abstract GetNameList : 
            NumberNames : int byref * 
            MyName : string[] byref -> int 
    

#### Parameters

NumberNames

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
The number of rebar properties

MyName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is a one-dimensional array of rebar property names. The MyName array is
created as a dynamic, zero-based, array by the API user:

Dim MyName() as String

The array is dimensioned to (NumberNames – 1) inside the ETABS program, filled
with the names, and returned to the API user.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the data is successfully retrieved, otherwise it returns
nonzero

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropRebar Interface](47c53370-e93f-bb32-ca2b-5e99e90862c4.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

