

CSI API ETABS v1

# cFrameObjGetDesignProcedure Method  
  
---  
  
Retrieves the design procedure for a frame object

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetDesignProcedure(
    	string Name,
    	ref int MyType
    )
    
    
    Function GetDesignProcedure ( 
    	Name As String,
    	ByRef MyType As Integer
    ) As Integer
    
    Dim instance As cFrameObj
    Dim Name As String
    Dim MyType As Integer
    Dim returnValue As Integer
    
    returnValue = instance.GetDesignProcedure(Name, 
    	MyType)
    
    
    int GetDesignProcedure(
    	String^ Name, 
    	int% MyType
    )
    
    
    abstract GetDesignProcedure : 
            Name : string * 
            MyType : int byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing frame object

MyType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer from the list below, indicating the design procedure type
of the specified frame object.

  * Program determined = 0
  * Steel Frame Design = 1
  * Concrete Frame Design = 2
  * Composite Beam Design = 3
  * Steel Joist Design = 4
  * No Design = 7
  * Composite Column Design = 13

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the design procedure is successfully retrieved; otherwise it
returns a nonzero value

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
       Dim SapModel As cSapModel
       Dim EtabsObject As cOAPI
       Dim ret As Integer = -1
       Dim MyType as Integer
    
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
    
    'set design procedure
       ret = SapModel.FrameObj.GetDesignProcedure("8", MyType)
    
    'close ETABS
       EtabsObject.ApplicationExit(False)
    
    'clean up variables
       SapModel = Nothing
       EtabsObject = Nothing
    
    End Sub

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

