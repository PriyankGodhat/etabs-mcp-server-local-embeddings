

CSI API ETABS v1

# cPropLinkSetAcceptanceCriteria Method  
  
---  
  
Assigns the acceptance criteria data for a link property

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetAcceptanceCriteria(
    	string Name,
    	int AcceptanceType,
    	bool Symmetric,
    	ref bool[] Active,
    	ref double[] IOPos,
    	ref double[] LSPos,
    	ref double[] CPPos,
    	ref double[] IONeg,
    	ref double[] LSNeg,
    	ref double[] CPNeg
    )
    
    
    Function SetAcceptanceCriteria ( 
    	Name As String,
    	AcceptanceType As Integer,
    	Symmetric As Boolean,
    	ByRef Active As Boolean(),
    	ByRef IOPos As Double(),
    	ByRef LSPos As Double(),
    	ByRef CPPos As Double(),
    	ByRef IONeg As Double(),
    	ByRef LSNeg As Double(),
    	ByRef CPNeg As Double()
    ) As Integer
    
    Dim instance As cPropLink
    Dim Name As String
    Dim AcceptanceType As Integer
    Dim Symmetric As Boolean
    Dim Active As Boolean()
    Dim IOPos As Double()
    Dim LSPos As Double()
    Dim CPPos As Double()
    Dim IONeg As Double()
    Dim LSNeg As Double()
    Dim CPNeg As Double()
    Dim returnValue As Integer
    
    returnValue = instance.SetAcceptanceCriteria(Name, 
    	AcceptanceType, Symmetric, Active, 
    	IOPos, LSPos, CPPos, IONeg, LSNeg, 
    	CPNeg)
    
    
    int SetAcceptanceCriteria(
    	String^ Name, 
    	int AcceptanceType, 
    	bool Symmetric, 
    	array<bool>^% Active, 
    	array<double>^% IOPos, 
    	array<double>^% LSPos, 
    	array<double>^% CPPos, 
    	array<double>^% IONeg, 
    	array<double>^% LSNeg, 
    	array<double>^% CPNeg
    )
    
    
    abstract SetAcceptanceCriteria : 
            Name : string * 
            AcceptanceType : int * 
            Symmetric : bool * 
            Active : bool[] byref * 
            IOPos : float[] byref * 
            LSPos : float[] byref * 
            CPPos : float[] byref * 
            IONeg : float[] byref * 
            LSNeg : float[] byref * 
            CPNeg : float[] byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing link property

AcceptanceType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This item is either 1 or 2. 1 means Force and 2 means Displacement.

Symmetric

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  
Indicates if the acceptance criteria is symmetric, that is, the negative
values are the same as the positive values.

Active

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  
This is an array dimensioned to 5 indicating if the acceptance criteria is
active for each. Items 0 thru 5 in the array refer to F1, F2, F3, M1, M2, M3
or U1, U2, U3, R1, R2, R3, respectively.

IOPos

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the positive immediate occupancy
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

LSPos

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the positive life safety
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

CPPos

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the positive collapse prevention
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

IONeg

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the negative immediate occupancy
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

LSNeg

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the negative life safety
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

CPNeg

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array dimensioned to 5 indicating the negative collapse prevention
acceptance criteria values for each DOF. Items 0 thru 5 in the array refer to
F1, F2, F3, M1, M2, M3 or U1, U2, U3, R1, R2, R3, respectively.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
returns zero if the data is successfully retrieved; otherwise it returns a
nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim MyDOF() As Boolean
           Dim MyFixed() As Boolean
           Dim MyNonLinear() as Boolean
           Dim MyKe() As Double
           Dim MyCe() As Double
           Dim Active() As Boolean
           Dim IOPos() As Double
           Dim LSPos() As Double
           Dim CPPos() As Double
           Dim IONeg() As Double
           Dim LSNeg() As Double
           Dim CPNeg() As Double
           Dim AcceptanceType As Integer
           Dim Symmetric As Boolean
    
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
    
       'add a link property
           ReDim MyDOF(5)
           ReDim MyFixed(5)
           ReDim MyNonLinear(5)
           ReDim MyKe(5)
           ReDim MyCe(5)
    
           MyDOF(0) = True
           MyKe(0) = 12
           MyCe(0) = 0.01
    
           MyDOF(1) = True
           MyNonLinear(1) = True
           MyKe(1) = 12
           MyCe(1) = 0.01
    
           MyDOF(2) = True
           MyFixed(2) = True
    
           ret = SapModel.PropLink.SetMultiLinearElastic("MLE1", MyDOF, MyFixed, MyNonLinear, MyKe, MyCe, 2, 0)
    
       'set link property acceptance criteria
           ReDim Active(5)
           ReDim IOPos(5)
           ReDim LSPos(5)
           ReDim CPPos(5)
           ReDim IONeg(5)
           ReDim LSNeg(5)
           ReDim CPNeg(5)
           Active(0) = True
           Active(1) = True
           IOPos(0) = 100
           LSPos(0) = 200
           CPPos(0) = 300
           IONeg(0) = 120
           LSNeg(0) = 220
           CPNeg(0) = 320
           IOPos(1) = 150
           LSPos(1) = 250
           CPPos(1) = 350
           IONeg(1) = 130
           LSNeg(1) = 230
           CPNeg(1) = 330
           ret = SapModel.PropLink.SetAcceptanceCriteria("MLE1", 1, False, Active, IOPos, LSPos, CPPos, IONeg, LSNeg, CPNeg)
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropLink Interface](a76cf100-6278-6a57-2daf-e0425fef43cb.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

