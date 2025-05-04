

CSI API ETABS v1

# cCaseStaticNonlinearGetSolControlParameters Method  
  
---  
  
**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetSolControlParameters(
    	string Name,
    	ref int MaxTotalSteps,
    	ref int MaxFailedSubSteps,
    	ref int MaxIterCS,
    	ref int MaxIterNR,
    	ref double TolConvD,
    	ref bool UseEventStepping,
    	ref double TolEventD,
    	ref int MaxLineSearchPerIter,
    	ref double TolLineSearch,
    	ref double LineSearchStepFact
    )
    
    
    Function GetSolControlParameters ( 
    	Name As String,
    	ByRef MaxTotalSteps As Integer,
    	ByRef MaxFailedSubSteps As Integer,
    	ByRef MaxIterCS As Integer,
    	ByRef MaxIterNR As Integer,
    	ByRef TolConvD As Double,
    	ByRef UseEventStepping As Boolean,
    	ByRef TolEventD As Double,
    	ByRef MaxLineSearchPerIter As Integer,
    	ByRef TolLineSearch As Double,
    	ByRef LineSearchStepFact As Double
    ) As Integer
    
    Dim instance As cCaseStaticNonlinear
    Dim Name As String
    Dim MaxTotalSteps As Integer
    Dim MaxFailedSubSteps As Integer
    Dim MaxIterCS As Integer
    Dim MaxIterNR As Integer
    Dim TolConvD As Double
    Dim UseEventStepping As Boolean
    Dim TolEventD As Double
    Dim MaxLineSearchPerIter As Integer
    Dim TolLineSearch As Double
    Dim LineSearchStepFact As Double
    Dim returnValue As Integer
    
    returnValue = instance.GetSolControlParameters(Name, 
    	MaxTotalSteps, MaxFailedSubSteps, 
    	MaxIterCS, MaxIterNR, TolConvD, UseEventStepping, 
    	TolEventD, MaxLineSearchPerIter, 
    	TolLineSearch, LineSearchStepFact)
    
    
    int GetSolControlParameters(
    	String^ Name, 
    	int% MaxTotalSteps, 
    	int% MaxFailedSubSteps, 
    	int% MaxIterCS, 
    	int% MaxIterNR, 
    	double% TolConvD, 
    	bool% UseEventStepping, 
    	double% TolEventD, 
    	int% MaxLineSearchPerIter, 
    	double% TolLineSearch, 
    	double% LineSearchStepFact
    )
    
    
    abstract GetSolControlParameters : 
            Name : string * 
            MaxTotalSteps : int byref * 
            MaxFailedSubSteps : int byref * 
            MaxIterCS : int byref * 
            MaxIterNR : int byref * 
            TolConvD : float byref * 
            UseEventStepping : bool byref * 
            TolEventD : float byref * 
            MaxLineSearchPerIter : int byref * 
            TolLineSearch : float byref * 
            LineSearchStepFact : float byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

MaxTotalSteps

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

MaxFailedSubSteps

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

MaxIterCS

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

MaxIterNR

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

TolConvD

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

UseEventStepping

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  

TolEventD

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

MaxLineSearchPerIter

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  

TolLineSearch

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

LineSearchStepFact

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)

![](../icons/SectionExpanded.png)See Also

#### Reference

[cCaseStaticNonlinear Interface](f9b065f8-b096-3a32-1e6d-bdc5420bb195.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

