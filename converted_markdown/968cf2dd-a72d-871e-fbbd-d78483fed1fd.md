

CSI API ETABS v1

# cAreaObjGetLoadUniformToFrame Method  
  
---  
  
NOT APPLICABLE - Retrieves the uniform to frame load assignments to area
objects.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetLoadUniformToFrame(
    	string Name,
    	ref int NumberItems,
    	ref string[] AreaName,
    	ref string[] LoadPat,
    	ref string[] CSys,
    	ref int[] Dir,
    	ref double[] Value,
    	ref int[] DistType,
    	eItemType ItemType = eItemType.Objects
    )
    
    
    Function GetLoadUniformToFrame ( 
    	Name As String,
    	ByRef NumberItems As Integer,
    	ByRef AreaName As String(),
    	ByRef LoadPat As String(),
    	ByRef CSys As String(),
    	ByRef Dir As Integer(),
    	ByRef Value As Double(),
    	ByRef DistType As Integer(),
    	Optional ItemType As eItemType = eItemType.Objects
    ) As Integer
    
    Dim instance As cAreaObj
    Dim Name As String
    Dim NumberItems As Integer
    Dim AreaName As String()
    Dim LoadPat As String()
    Dim CSys As String()
    Dim Dir As Integer()
    Dim Value As Double()
    Dim DistType As Integer()
    Dim ItemType As eItemType
    Dim returnValue As Integer
    
    returnValue = instance.GetLoadUniformToFrame(Name, 
    	NumberItems, AreaName, LoadPat, CSys, 
    	Dir, Value, DistType, ItemType)
    
    
    int GetLoadUniformToFrame(
    	String^ Name, 
    	int% NumberItems, 
    	array<String^>^% AreaName, 
    	array<String^>^% LoadPat, 
    	array<String^>^% CSys, 
    	array<int>^% Dir, 
    	array<double>^% Value, 
    	array<int>^% DistType, 
    	eItemType ItemType = eItemType::Objects
    )
    
    
    abstract GetLoadUniformToFrame : 
            Name : string * 
            NumberItems : int byref * 
            AreaName : string[] byref * 
            LoadPat : string[] byref * 
            CSys : string[] byref * 
            Dir : int[] byref * 
            Value : float[] byref * 
            DistType : int[] byref * 
            ?ItemType : eItemType 
    (* Defaults:
            let _ItemType = defaultArg ItemType eItemType.Objects
    *)
    -> int 
    

#### Parameters

Name

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
The name of an existing area object or group, depending on the value of the
ItemType item.

NumberItems

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
The total number of uniform to frame loads retrieved for the specified area
objects.

AreaName

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the area object associated with
each uniform to frame load.

LoadPat

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the load pattern associated with
each uniform to frame load.

CSys

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
This is an array that includes the name of the coordinate system associated
with each uniform to frame load.

Dir

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer between 1 and 11, indicating the direction of the load.

  1. Local 1 axis (only applies when CSys is Local)
  2. Local 2 axis (only applies when CSys is Local)
  3. Local 3 axis (only applies when CSys is Local)
  4. X direction (does not apply when CSys is Local)
  5. Y direction (does not apply when CSys is Local)
  6. Z direction (does not apply when CSys is Local)
  7. Projected X direction (does not apply when CSys is Local)
  8. Projected Y direction (does not apply when CSys is Local)
  9. Projected Z direction (does not apply when CSys is Local)
  10. Gravity direction (only applies when CSys is Global)
  11. Projected Gravity direction (only applies when CSys is Global)

The positive gravity direction (see Dir = 10 and 11) is in the negative Global
Z direction.

Value

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The uniform load value. [F/L^2]

DistType

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is either 1 or 2, indicating the load distribution type.

  1. One-way load distribution
  2. Two-way load distribution

ItemType (Optional)

    Type: [ETABSv1eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm)  
This is one of the following items in the
[eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm) enumeration:

  * Object = 0
  * Group = 1
  * SelectedObjects = 2

If this item is [Objects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the
assignments are retrieved for the area object specified by the Name item.

If this item is [Group](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the
assignments are retrieved for all area objects in the group specified by the
Name item.

If this item is [SelectedObjects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm),
assignments are retrieved for is made to all selected area objects, and the
Name item is ignored.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the load assignments are successfully retrieved; otherwise it
returns a nonzero value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)See Also

#### Reference

[cAreaObj Interface](2cda9b42-232e-6821-8caa-dc87fd84fed0.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

