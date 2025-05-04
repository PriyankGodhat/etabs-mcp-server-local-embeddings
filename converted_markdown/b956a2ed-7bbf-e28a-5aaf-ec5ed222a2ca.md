

CSI API ETABS v1

# cPropFrameDelete Method  
  
---  
  
Deletes a specified frame section property.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int Delete(
    	string Name
    )
    
    
    Function Delete ( 
    	Name As String
    ) As Integer
    
    Dim instance As cPropFrame
    Dim Name As String
    Dim returnValue As Integer
    
    returnValue = instance.Delete(Name)
    
    
    int Delete(
    	String^ Name
    )
    
    
    abstract Delete : 
            Name : string -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing frame section property.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the frame section property is successfully deleted; otherwise
it returns a nonzero value. It returns an error if the specified frame section
property can not be deleted; for example, if it is being used by a frame
object.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
    
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
    
       'set new frame section property
           ret = SapModel.PropFrame.SetAngle("ANGLE1", "A992Fy50", 6, 4, 0.5, 0.5)
    
       'delete frame property
           ret = SapModel.PropFrame.Delete("ANGLE1")
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropFrame Interface](818573fe-2b13-6183-8dc9-0cf3e8e02c7a.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

