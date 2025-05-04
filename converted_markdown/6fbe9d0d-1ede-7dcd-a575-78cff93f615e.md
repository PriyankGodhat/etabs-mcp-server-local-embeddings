

CSI API ETABS v1

# cSapModelGetPresentUnits Method  
  
---  
  
Returns a value from the [eUnits](079bd07d-c1db-bcc4-9019-d9f554c21379.htm)
enumeration indicating the units presently specified for the model.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    eUnits GetPresentUnits()
    
    
    Function GetPresentUnits As eUnits
    
    Dim instance As cSapModel
    Dim returnValue As eUnits
    
    returnValue = instance.GetPresentUnits()
    
    
    eUnits GetPresentUnits()
    
    
    abstract GetPresentUnits : unit -> eUnits 
    

#### Return Value

Type: [eUnits](079bd07d-c1db-bcc4-9019-d9f554c21379.htm)  
Returns a value from the [eUnits](079bd07d-c1db-bcc4-9019-d9f554c21379.htm)
enumeration if successful, otherwise returns zero.

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
    
       'get present units
           Dim presentUnits as eUnits
           presentUnits = SapModel.GetPresentUnits()
    
       'run model (this will create the analysis model)
           ret = SapModel.Analyze.RunAnalysis
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cSapModel Interface](fe0b0096-9fef-56a3-9d57-cdef76e0f611.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

