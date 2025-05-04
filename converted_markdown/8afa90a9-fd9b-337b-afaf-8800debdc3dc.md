

CSI API ETABS v1

# cLinkObjGetPoints Method  
  
---  
  
Retrieves the names of the point objects at each end of a specified link
object. If names of the two point objects are the same, the specified link
object is a one-joint link object.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetPoints(
    	string Name,
    	ref string Point1,
    	ref string Point2
    )
    
    
    Function GetPoints ( 
    	Name As String,
    	ByRef Point1 As String,
    	ByRef Point2 As String
    ) As Integer
    
    Dim instance As cLinkObj
    Dim Name As String
    Dim Point1 As String
    Dim Point2 As String
    Dim returnValue As Integer
    
    returnValue = instance.GetPoints(Name, 
    	Point1, Point2)
    
    
    int GetPoints(
    	String^ Name, 
    	String^% Point1, 
    	String^% Point2
    )
    
    
    abstract GetPoints : 
            Name : string * 
            Point1 : string byref * 
            Point2 : string byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of a defined link object.

Point1

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of the point object at the I-End of the specified link object.

Point2

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of the point object at the J-End of the specified link object.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the point names are successfully retrieved; otherwise it
returns a nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
           Dim SapModel As cSapModel
           Dim EtabsObject As cOAPI
           Dim ret As Integer = -1
           Dim Name As String
           Dim Point1 As String
           Dim Point2 As String
    
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
    
       'add link object by points
           ret = SapModel.LinkObj.AddByPoint("1", "5", Name)
    
       'get names of points
           ret = SapModel.LinkObj.GetPoints(Name, Point1, Point2)
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cLinkObj Interface](de8a4ec7-1e74-f9b5-385e-f8c0db74b8f6.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

