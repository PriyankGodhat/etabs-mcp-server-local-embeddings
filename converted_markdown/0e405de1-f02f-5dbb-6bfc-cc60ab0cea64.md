

CSI API ETABS v1

# cDesignConcreteGetSummaryResultsBeam Method  
  
---  
  
Retrieves beam summary results for concrete design.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetSummaryResultsBeam(
    	string Name,
    	ref int NumberItems,
    	ref string[] FrameName,
    	ref double[] Location,
    	ref string[] TopCombo,
    	ref double[] TopArea,
    	ref string[] BotCombo,
    	ref double[] BotArea,
    	ref string[] VMajorCombo,
    	ref double[] VMajorArea,
    	ref string[] TLCombo,
    	ref double[] TLArea,
    	ref string[] TTCombo,
    	ref double[] TTArea,
    	ref string[] ErrorSummary,
    	ref string[] WarningSummary,
    	eItemType ItemType = eItemType.Objects
    )
    
    
    Function GetSummaryResultsBeam ( 
    	Name As String,
    	ByRef NumberItems As Integer,
    	ByRef FrameName As String(),
    	ByRef Location As Double(),
    	ByRef TopCombo As String(),
    	ByRef TopArea As Double(),
    	ByRef BotCombo As String(),
    	ByRef BotArea As Double(),
    	ByRef VMajorCombo As String(),
    	ByRef VMajorArea As Double(),
    	ByRef TLCombo As String(),
    	ByRef TLArea As Double(),
    	ByRef TTCombo As String(),
    	ByRef TTArea As Double(),
    	ByRef ErrorSummary As String(),
    	ByRef WarningSummary As String(),
    	Optional ItemType As eItemType = eItemType.Objects
    ) As Integer
    
    Dim instance As cDesignConcrete
    Dim Name As String
    Dim NumberItems As Integer
    Dim FrameName As String()
    Dim Location As Double()
    Dim TopCombo As String()
    Dim TopArea As Double()
    Dim BotCombo As String()
    Dim BotArea As Double()
    Dim VMajorCombo As String()
    Dim VMajorArea As Double()
    Dim TLCombo As String()
    Dim TLArea As Double()
    Dim TTCombo As String()
    Dim TTArea As Double()
    Dim ErrorSummary As String()
    Dim WarningSummary As String()
    Dim ItemType As eItemType
    Dim returnValue As Integer
    
    returnValue = instance.GetSummaryResultsBeam(Name, 
    	NumberItems, FrameName, Location, 
    	TopCombo, TopArea, BotCombo, BotArea, 
    	VMajorCombo, VMajorArea, TLCombo, 
    	TLArea, TTCombo, TTArea, ErrorSummary, 
    	WarningSummary, ItemType)
    
    
    int GetSummaryResultsBeam(
    	String^ Name, 
    	int% NumberItems, 
    	array<String^>^% FrameName, 
    	array<double>^% Location, 
    	array<String^>^% TopCombo, 
    	array<double>^% TopArea, 
    	array<String^>^% BotCombo, 
    	array<double>^% BotArea, 
    	array<String^>^% VMajorCombo, 
    	array<double>^% VMajorArea, 
    	array<String^>^% TLCombo, 
    	array<double>^% TLArea, 
    	array<String^>^% TTCombo, 
    	array<double>^% TTArea, 
    	array<String^>^% ErrorSummary, 
    	array<String^>^% WarningSummary, 
    	eItemType ItemType = eItemType::Objects
    )
    
    
    abstract GetSummaryResultsBeam : 
            Name : string * 
            NumberItems : int byref * 
            FrameName : string[] byref * 
            Location : float[] byref * 
            TopCombo : string[] byref * 
            TopArea : float[] byref * 
            BotCombo : string[] byref * 
            BotArea : float[] byref * 
            VMajorCombo : string[] byref * 
            VMajorArea : float[] byref * 
            TLCombo : string[] byref * 
            TLArea : float[] byref * 
            TTCombo : string[] byref * 
            TTArea : float[] byref * 
            ErrorSummary : string[] byref * 
            WarningSummary : string[] byref * 
            ?ItemType : eItemType 
    (* Defaults:
            let _ItemType = defaultArg ItemType eItemType.Objects
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing frame object or group, depending on the value of the
ItemType item.

NumberItems

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
The number of frame objects for which results are obtained.

FrameName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes each frame object name for which results are
obtained.

Location

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the distance from the I-end of the frame object
to the location where the results are reported. [L]

TopCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the design combination for which
the controlling top longitudinal rebar area for flexure occurs. A combination
name followed by (Sp) indicates that the design loads were obtained by
applying special, code-specific multipliers to all or part of the specified
design load combination, or that the design was based on the capacity of other
objects (or other design locations for the same object).

TopArea

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the total top longitudinal rebar area required
for the flexure at the specified location. It does not include the area of
steel required for torsion. [L2]

BotCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the design combination for which
the controlling bottom longitudinal rebar area for flexure occurs. A
combination name followed by (Sp) indicates that the design loads were
obtained by applying special, code-specific, multipliers to all or part of the
specified design load combination, or that the design was based on the
capacity of other objects (or other design locations for the same object).

BotArea

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the total bottom longitudinal rebar area
required for the flexure at the specified location. It does not include the
area of steel required for torsion. [L2]

VMajorCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  

VMajorArea

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  

TLCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the design combination for which
the controlling longitudinal rebar area for torsion occurs. A combination name
followed by (Sp) indicates that the design loads were obtained by applying
special, code-specific, multipliers to all or part of the specified design
load combination, or that the design was based on the capacity of other
objects (or other design locations for the same object).

TLArea

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the total longitudinal rebar area required for
torsion. [L2]

TTCombo

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the design combination for which
the controlling transverse reinforcing for torsion occurs. A combination name
followed by (Sp) indicates that the design loads were obtained by applying
special, code-specific, multipliers to all or part of the specified design
load combination, or that the design was based on the capacity of other
objects (or other design locations for the same object).

TTArea

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
This is an array that includes the required area of transverse torsional shear
reinforcing per unit length along the frame object for torsion at the
specified location. [L2/L]

ErrorSummary

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the design error messages for the frame object,
if any.

WarningSummary

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the design warning messages for the frame
object, if any.

ItemType (Optional)

    Type: [ETABSv1eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm)  
This is one of the following items in the
[eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm) enumeration:

  * Object = 0
  * Group = 1
  * SelectedObjects = 2

If this item is [Objects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the
design results are retrieved for the frame object specified by the Name item.

If this item is [Group](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the design
results are retrieved for all frame objects in the group specified by the Name
item.

If this item is [SelectedObjects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm),
the design results are retrieved for all selected frame objects, and the Name
item is ignored.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the results are successfully retrieved; otherwise it returns a
nonzero value.

![](../icons/SectionExpanded.png)Remarks

Note that torsional design is only included for some codes.

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
       Dim SapModel As cSapModel
       Dim EtabsObject As cOAPI
       Dim ret As Integer = -1
       Dim Name As String
       Dim NumberItems As Integer
       Dim FrameName() As String
       Dim Location() As Double
       Dim TopCombo() As String
       Dim TopArea() As Double
       Dim BotCombo() As String
       Dim BotArea() As Double
       Dim VmajorCombo() As String
       Dim VmajorArea() As Double
       Dim TLCombo() As String
       Dim TLArea() As Double
       Dim TTCombo() As String
       Dim TTArea() As Double
       Dim ErrorSummary() As String
       Dim WarningSummary() As String
    
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
    
    'add ASTM A706 rebar material
       ret = SapModel.PropMaterial.AddMaterial(Name, eMatType.Rebar, "United States", "ASTM A706", "Grade 60")
    
    'create new concrete frame section properties
       ret = SapModel.PropFrame.SetRectangle("COL", "4000Psi", 20, 20)
       ret = SapModel.PropFrame.SetRectangle("BEAM", "4000Psi", 20, 12)
       ret = SapModel.PropFrame.SetRebarBeam("BEAM", Name, Name, 2, 2, 2, 2, 2, 2)
    
    'assign concrete beam
       ret = SapModel.FrameObj.SetSection("74", "BEAM")
    
    'run analysis
       System.IO.Directory.CreateDirectory("c:\CSI_API_temp")
       ret = SapModel.File.Save("C:\CSI_API_temp\example.edb")
       ret = SapModel.Analyze.RunAnalysis()
    
    'start concrete design
       ret = SapModel.DesignConcrete.StartDesign()
    
    'get summary result data
       ret = SapModel.DesignConcrete.GetSummaryResultsBeam("74", NumberItems, FrameName, Location, TopCombo, TopArea, BotCombo, BotArea, VmajorCombo, VmajorArea, TLCombo, TLArea, TTCombo, TTArea, ErrorSummary, WarningSummary)
    
    'close ETABS
       EtabsObject.ApplicationExit(False)
    
    'clean up variables
       SapModel = Nothing
       EtabsObject = Nothing
    
    End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDesignConcrete Interface](692d8043-f8d2-9265-f110-3f37b97ae059.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

