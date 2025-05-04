

CSI API ETABS v1

# cPropAreaSetShellDesign Method  
  
---  
  
Assigns the design parameters for shell-type area properties.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetShellDesign(
    	string Name,
    	string MatProp,
    	int SteelLayoutOption,
    	double DesignCoverTopDir1,
    	double DesignCoverTopDir2,
    	double DesignCoverBotDir1,
    	double DesignCoverBotDir2
    )
    
    
    Function SetShellDesign ( 
    	Name As String,
    	MatProp As String,
    	SteelLayoutOption As Integer,
    	DesignCoverTopDir1 As Double,
    	DesignCoverTopDir2 As Double,
    	DesignCoverBotDir1 As Double,
    	DesignCoverBotDir2 As Double
    ) As Integer
    
    Dim instance As cPropArea
    Dim Name As String
    Dim MatProp As String
    Dim SteelLayoutOption As Integer
    Dim DesignCoverTopDir1 As Double
    Dim DesignCoverTopDir2 As Double
    Dim DesignCoverBotDir1 As Double
    Dim DesignCoverBotDir2 As Double
    Dim returnValue As Integer
    
    returnValue = instance.SetShellDesign(Name, 
    	MatProp, SteelLayoutOption, DesignCoverTopDir1, 
    	DesignCoverTopDir2, DesignCoverBotDir1, 
    	DesignCoverBotDir2)
    
    
    int SetShellDesign(
    	String^ Name, 
    	String^ MatProp, 
    	int SteelLayoutOption, 
    	double DesignCoverTopDir1, 
    	double DesignCoverTopDir2, 
    	double DesignCoverBotDir1, 
    	double DesignCoverBotDir2
    )
    
    
    abstract SetShellDesign : 
            Name : string * 
            MatProp : string * 
            SteelLayoutOption : int * 
            DesignCoverTopDir1 : float * 
            DesignCoverTopDir2 : float * 
            DesignCoverBotDir1 : float * 
            DesignCoverBotDir2 : float -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing shell-type area property.

MatProp

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of the material property for the area property.

SteelLayoutOption

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is 0, 1 or 2 indicating, the rebar layout option.

Value| Layout  
---|---  
0| Default  
1| One layer  
2| Two layers  
  
DesignCoverTopDir1

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The cover to the centroid of the top reinforcing steel running in the local 1
axis direction of the area object. [L]

This item applies only when SteelLayoutOption = 1 or 2.

DesignCoverTopDir2

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The cover to the centroid of the top reinforcing steel running in the local 2
axis direction of the area object. [L]

This item applies only when SteelLayoutOption = 1 or 2.

DesignCoverBotDir1

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The cover to the centroid of the bottom reinforcing steel running in the local
1 axis direction of the area object. [L]

This item applies only when SteelLayoutOption = 2.

DesignCoverBotDir2

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The cover to the centroid of the bottom reinforcing steel running in the local
2 axis direction of the area object. [L]

This item applies only when SteelLayoutOption = 2.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the parameters are successfully assigned; otherwise it returns
a nonzero value.

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
    
       'set area property design parameters
           ret = SapModel.PropArea.SetShellDesign("SLAB1", "A615Gr60", 2, 2, 3, 2.5, 3.5)
    
       'close ETABS
           EtabsObject.ApplicationExit(False)
    
       'clean up variables
           SapModel = Nothing
           EtabsObject = Nothing
       End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cPropArea Interface](05202e19-1948-3d93-0a27-426378bde769.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

