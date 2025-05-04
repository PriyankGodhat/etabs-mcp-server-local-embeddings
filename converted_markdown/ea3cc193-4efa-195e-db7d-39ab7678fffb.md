

CSI API ETABS v1

# cFrameObjGetInsertionPoint_1 Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetInsertionPoint_1(
    	string Name,
    	ref int CardinalPoint,
    	ref bool Mirror2,
    	ref bool Mirror3,
    	ref bool StiffTransform,
    	ref double[] Offset1,
    	ref double[] Offset2,
    	ref string CSys
    )
    
    
    Function GetInsertionPoint_1 ( 
    	Name As String,
    	ByRef CardinalPoint As Integer,
    	ByRef Mirror2 As Boolean,
    	ByRef Mirror3 As Boolean,
    	ByRef StiffTransform As Boolean,
    	ByRef Offset1 As Double(),
    	ByRef Offset2 As Double(),
    	ByRef CSys As String
    ) As Integer
    
    Dim instance As cFrameObj
    Dim Name As String
    Dim CardinalPoint As Integer
    Dim Mirror2 As Boolean
    Dim Mirror3 As Boolean
    Dim StiffTransform As Boolean
    Dim Offset1 As Double()
    Dim Offset2 As Double()
    Dim CSys As String
    Dim returnValue As Integer
    
    returnValue = instance.GetInsertionPoint_1(Name, 
    	CardinalPoint, Mirror2, Mirror3, 
    	StiffTransform, Offset1, Offset2, 
    	CSys)
    
    
    int GetInsertionPoint_1(
    	String^ Name, 
    	int% CardinalPoint, 
    	bool% Mirror2, 
    	bool% Mirror3, 
    	bool% StiffTransform, 
    	array<double>^% Offset1, 
    	array<double>^% Offset2, 
    	String^% CSys
    )
    
    
    abstract GetInsertionPoint_1 : 
            Name : string * 
            CardinalPoint : int byref * 
            Mirror2 : bool byref * 
            Mirror3 : bool byref * 
            StiffTransform : bool byref * 
            Offset1 : float[] byref * 
            Offset2 : float[] byref * 
            CSys : string byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

CardinalPoint

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

Mirror2

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

Mirror3

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

StiffTransform

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

Offset1

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

Offset2

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

CSys

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cFrameObj Interface](d5342667-2977-9fdc-9769-e4e2becc0803.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

