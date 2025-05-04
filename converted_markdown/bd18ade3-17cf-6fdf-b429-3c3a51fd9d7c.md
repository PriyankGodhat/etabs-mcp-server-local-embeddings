

CSI API ETABS v1

# cDiaphragmSetDiaphragm Method  
  
---  
  
Adds a new diaphragm, or modifies an existing diaphragm

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetDiaphragm(
    	string Name,
    	bool SemiRigid
    )
    
    
    Function SetDiaphragm ( 
    	Name As String,
    	SemiRigid As Boolean
    ) As Integer
    
    Dim instance As cDiaphragm
    Dim Name As String
    Dim SemiRigid As Boolean
    Dim returnValue As Integer
    
    returnValue = instance.SetDiaphragm(Name, 
    	SemiRigid)
    
    
    int SetDiaphragm(
    	String^ Name, 
    	bool SemiRigid
    )
    
    
    abstract SetDiaphragm : 
            Name : string * 
            SemiRigid : bool -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is the name of a diaphragm. If this is the name of an existing diaphragm,
that diaphragm is modified, otherwise a new diaphragm is added.

SemiRigid

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  
This item is True if the diaphragm is to be semi-rigid, and False otherwise

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the diaphragm is successfully added or modified, otherwise it
returns a nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
       Dim SapModel As cSapModel
       Dim EtabsObject As cOAPI
       Dim ret As Integer = -1
       Dim NumberNames As Integer
       Dim MyName As String()
    
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
       ret = SapModel.File.NewSteelDeck(4, 12, 12, 4, 4, 24, 24)
    
    'define new diaphragm
        ret = SapModel.Diaphragm.SetDiaphragm("MyDiaphragm1A", SemiRigid:=True)
    
    'close ETABS
       EtabsObject.ApplicationExit(False)
    
    'clean up variables
       SapModel = Nothing
       EtabsObject = Nothing
    
    End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDiaphragm Interface](079a559a-53b7-899a-df5b-92826a589cd7.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

