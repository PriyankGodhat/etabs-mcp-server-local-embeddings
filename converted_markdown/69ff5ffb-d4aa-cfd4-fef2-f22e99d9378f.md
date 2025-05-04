

CSI API ETABS v1

# cDesignStripGetDesignStrip_1 Method  
  
---  
  
Retrieves the specified Design Strip

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetDesignStrip_1(
    	string Name,
    	ref int DesignType,
    	ref string[] Point,
    	ref double[] GlobalX,
    	ref double[] GlobalY,
    	ref double[] GlobalZ,
    	ref double[] WBLeft,
    	ref double[] WBRight,
    	ref double[] WALeft,
    	ref double[] WARight,
    	ref bool[] AutoWiden
    )
    
    
    Function GetDesignStrip_1 ( 
    	Name As String,
    	ByRef DesignType As Integer,
    	ByRef Point As String(),
    	ByRef GlobalX As Double(),
    	ByRef GlobalY As Double(),
    	ByRef GlobalZ As Double(),
    	ByRef WBLeft As Double(),
    	ByRef WBRight As Double(),
    	ByRef WALeft As Double(),
    	ByRef WARight As Double(),
    	ByRef AutoWiden As Boolean()
    ) As Integer
    
    Dim instance As cDesignStrip
    Dim Name As String
    Dim DesignType As Integer
    Dim Point As String()
    Dim GlobalX As Double()
    Dim GlobalY As Double()
    Dim GlobalZ As Double()
    Dim WBLeft As Double()
    Dim WBRight As Double()
    Dim WALeft As Double()
    Dim WARight As Double()
    Dim AutoWiden As Boolean()
    Dim returnValue As Integer
    
    returnValue = instance.GetDesignStrip_1(Name, 
    	DesignType, Point, GlobalX, GlobalY, 
    	GlobalZ, WBLeft, WBRight, WALeft, 
    	WARight, AutoWiden)
    
    
    int GetDesignStrip_1(
    	String^ Name, 
    	int% DesignType, 
    	array<String^>^% Point, 
    	array<double>^% GlobalX, 
    	array<double>^% GlobalY, 
    	array<double>^% GlobalZ, 
    	array<double>^% WBLeft, 
    	array<double>^% WBRight, 
    	array<double>^% WALeft, 
    	array<double>^% WARight, 
    	array<bool>^% AutoWiden
    )
    
    
    abstract GetDesignStrip_1 : 
            Name : string * 
            DesignType : int byref * 
            Point : string[] byref * 
            GlobalX : float[] byref * 
            GlobalY : float[] byref * 
            GlobalZ : float[] byref * 
            WBLeft : float[] byref * 
            WBRight : float[] byref * 
            WALeft : float[] byref * 
            WARight : float[] byref * 
            AutoWiden : bool[] byref -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing Design Strip

DesignType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer indicating Strip Design Type

  * None = 0
  * Column Strip= 1
  * Middle Strip = 2

Point

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The unique name of a point object along the polyline that defines the strip.

GlobalX

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The global X coordinate of the specified point object.

GlobalY

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The global Y coordinate of the specified point object.

GlobalZ

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The global Z coordinate of the specified point object.

WBLeft

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The strip width left just before the specified point.

WBRight

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The strip width right just before the specified point.

WALeft

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The strip width left just after the specified point.

WARight

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The strip width right just after the specified point.

AutoWiden

    Type: [SystemBoolean](https://docs.microsoft.com/dotnet/api/system.boolean)  
This is boolean indicating whether the Strip Width Option is set to Auto Widen
Entire Strip (True), or User Specified Strip Segment Width (False)

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the Design Strip is successfully retrieved, otherwise it
returns a nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
       Dim SapModel As cSapModel
       Dim EtabsObject As cOAPI
       Dim ret As Integer = -1
       Dim DesignType as Integer
       Dim Point as String()
       Dim GlobalX as Double()
       Dim GlobalY as Double()
       Dim GlobalZ as Double()
       Dim WBLeft as Double()
       Dim WBRight as Double()
       Dim WALeft as Double()
       Dim WARight as Double()
       Dim AutoWiden as Boolean()
    
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
    
    'define new Design Strip with name "MyDesignStrip1A" ; currently not available in API
    
    'get DesignStrip
        ret = SapModel.DesignConcreteSlab.DesignStrip.GetDesignStrip_1("MyDesignStrip1A", DesignType, Point, GlobalX, GlobalY, GlobalZ, WBLeft, WBRight, WALeft, WARight, AutoWiden)
    
    'close ETABS
       EtabsObject.ApplicationExit(False)
    
    'clean up variables
       SapModel = Nothing
       EtabsObject = Nothing
    
    End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDesignStrip Interface](a81b3f03-3ed3-5a32-06f5-af6bc3daf603.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

