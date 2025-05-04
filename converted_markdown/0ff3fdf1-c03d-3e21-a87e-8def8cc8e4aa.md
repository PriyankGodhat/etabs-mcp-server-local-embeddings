

CSI API ETABS v1

# cDStAISC360_05_IBC2006SetOverwrite Method  
  
---  
  
Sets the value of a steel design overwrite item.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetOverwrite(
    	string Name,
    	int Item,
    	double Value,
    	eItemType ItemType = eItemType.Objects
    )
    
    
    Function SetOverwrite ( 
    	Name As String,
    	Item As Integer,
    	Value As Double,
    	Optional ItemType As eItemType = eItemType.Objects
    ) As Integer
    
    Dim instance As cDStAISC360_05_IBC2006
    Dim Name As String
    Dim Item As Integer
    Dim Value As Double
    Dim ItemType As eItemType
    Dim returnValue As Integer
    
    returnValue = instance.SetOverwrite(Name, 
    	Item, Value, ItemType)
    
    
    int SetOverwrite(
    	String^ Name, 
    	int Item, 
    	double Value, 
    	eItemType ItemType = eItemType::Objects
    )
    
    
    abstract SetOverwrite : 
            Name : string * 
            Item : int * 
            Value : float * 
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

Item

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer between 1 and 43, inclusive, indicating the overwrite item
considered.

  1. Framing type
  2. Omega0
  3. Consider deflection
  4. Deflection check type
  5. DL deflection limit, L/Value
  6. SDL + LL deflection limit, L/Value
  7. LL deflection limit, L/Value
  8. Total load deflection limit, L/Value
  9. Total camber limit, L/Value
  10. DL deflection limit, absolute
  11. SDL + LL deflection limit, absolute
  12. LL deflection limit, absolute
  13. Total load deflection limit, absolute
  14. Total camber limit, absolute
  15. Specified camber
  16. Net area to total area ratio
  17. Live load reduction factor
  18. Unbraced length ratio, Major
  19. Unbraced length ratio, Minor
  20. Unbraced length ratio, Lateral Torsional Buckling
  21. Effective length factor, K1 Major
  22. Effective length factor, K1 Minor
  23. Effective length factor, K2 Major
  24. Effective length factor, K2 Minor
  25. Effective length factor, K Lateral Torsional Buckling
  26. Moment coefficient, Cm Major
  27. Moment coefficient, Cm Minor
  28. Bending coefficient, Cb
  29. Nonsway moment factor, B1 Major
  30. Nonsway moment factor, B1 Minor
  31. Sway moment factor, B2 Major
  32. Sway moment factor, B2 Minor
  33. Reduce HSS thickness
  34. HSS welding type
  35. Yield stress, Fy
  36. Expected to specified Fy ratio, Ry
  37. Compressive capacity, Pnc
  38. Tensile capacity, Pnt
  39. Major bending capacity, Mn3
  40. Minor bending capacity, Mn2
  41. Major shear capacity, Vn2
  42. Minor shear capacity, Vn3
  43. Demand/capacity ratio limit

Value

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The value of the considered overwrite item.

  1. Framing type 
     * 0 = Program Default
     * 1 = SMF
     * 2 = IMF
     * 3 = OMF
     * 4 = SCBF
     * 5 = OCBF
     * 6 = OCBFI
     * 7 = EBF
  2. Omega0 

Value >= 0; 0 means use a program determined value.

  3. Consider deflection 
     * 0 = Program Default
     * 1 = No
     * 2 = Yes
  4. Deflection check type 
     * 0 = Program Default
     * 1 = Ratio
     * 2 = Absolute
     * 3 = Both
  5. DL deflection limit, L/Value 

Value >= 0; 0 means no check for this item.

  6. SDL + LL deflection limit, L/Value 

Value >= 0; 0 means no check for this item.

  7. LL deflection limit, L/Value 

Value >= 0; 0 means no check for this item.

  8. Total load deflection limit, L/Value 

Value >= 0; 0 means no check for this item.

  9. Total camber limit, L/Value 

Value >= 0; 0 means no check for this item.

  10. DL deflection limit, absolute 

Value >= 0; 0 means no check for this item. [L]

  11. SDL + LL deflection limit, absolute 

Value >= 0; 0 means no check for this item. [L]

  12. LL deflection limit, absolute 

Value >= 0; 0 means no check for this item. [L]

  13. Total load deflection limit, absolute 

Value >= 0; 0 means no check for this item. [L]

  14. Total camber limit, absolute 

Value >= 0; 0 means no check for this item. [L]

  15. Specified camber 

Value >= 0. [L]

  16. Net area to total area ratio 

Value >= 0; 0 means use program default value.

  17. Live load reduction factor 

Value >= 0; 0 means use program determined value.

  18. Unbraced length ratio, Major 

Value >= 0; 0 means use program determined value.

  19. Unbraced length ratio, Minor 

Value >= 0; 0 means use program determined value.

  20. Unbraced length ratio, Lateral Torsional Buckling 

Value >= 0; 0 means use program determined value.

  21. Effective length factor, K1 Major 

Value >= 0; 0 means use program determined value.

  22. Effective length factor, K1 Minor 

Value >= 0; 0 means use program determined value.

  23. Effective length factor, K2 Major 

Value >= 0; 0 means use program determined value.

  24. Effective length factor, K2 Minor 

Value >= 0; 0 means use program determined value.

  25. Effective length factor, K Lateral Torsional Buckling 

Value >= 0; 0 means use program determined value.

  26. Moment coefficient, Cm Major 

Value >= 0; 0 means use program determined value.

  27. Moment coefficient, Cm Minor 

Value >= 0; 0 means use program determined value.

  28. Bending coefficient, Cb 

Value >= 0; 0 means use program determined value.

  29. Nonsway moment factor, B1 Major 

Value >= 0; 0 means use program determined value.

  30. Nonsway moment factor, B1 Minor 

Value >= 0; 0 means use program determined value.

  31. Sway moment factor, B2 Major 

Value >= 0; 0 means use program determined value.

  32. Sway moment factor, B2 Minor 

Value >= 0; 0 means use program determined value.

  33. Reduce HSS thickness 
     * 0 = Program Default
     * 1 = No
     * 2 = Yes
  34. HSS welding type 
     * 0 = Program Default
     * 1 = ERW
     * 2 = SAW
  35. Yield stress, Fy 

Value >= 0; 0 means use program determined value. [F/L^2]

  36. Expected to specified Fy ratio, Ry 

Value >= 0; 0 means use program determined value.

  37. Compressive capacity, Pnc 

Value >= 0; 0 means use program determined value. [F]

  38. Tensile capacity, Pnt 

Value >= 0; 0 means use program determined value. [F]

  39. Major bending capacity, Mn3 

Value >= 0; 0 means use program determined value. [FL]

  40. Minor bending capacity, Mn2 

Value >= 0; 0 means use program determined value. [FL]

  41. Major shear capacity, Vn2 

Value >= 0; 0 means use program determined value. [F]

  42. Minor shear capacity, Vn3 

Value >= 0; 0 means use program determined value. [F]

  43. Demand/capacity ratio limit 

Value >= 0; 0 means use program determined value.

ItemType (Optional)

    Type: [ETABSv1eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm)  
This is one of the following items in the
[eItemType](b6597895-3f27-39aa-33a5-31da1d7662a0.htm) enumeration:

  * Object = 0
  * Group = 1
  * SelectedObjects = 2

If this item is [Objects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the
assignment is made to the frame object specified by the Name item.

If this item is [Group](b6597895-3f27-39aa-33a5-31da1d7662a0.htm), the
assignment is made to all frame objects in the group specified by the Name
item.

If this item is [SelectedObjects](b6597895-3f27-39aa-33a5-31da1d7662a0.htm),
the assignment is made to all selected frame objects and the Name item is
ignored.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the item is successfully set; otherwise it returns a nonzero
value.

![](../icons/SectionExpanded.png)Remarks

![](../icons/SectionExpanded.png)Examples

VB

Copy

    
    
    Public Sub Example()
       Dim SapModel As cSapModel
       Dim EtabsObject As cOAPI
       Dim ret As Integer = -1
       Dim Value As Double
       Dim ProgDet As Boolean
    
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
    
    'set steel design code
       ret = SapModel.DesignSteel.SetCode("AISC360-05/IBC2006")
    
    'set overwrite item
       ret = SapModel.DesignSteel.AISC360_05_IBC2006.SetOverwrite("8", 1, 7)
    
    'close ETABS
       EtabsObject.ApplicationExit(False)
    
    'clean up variables
       SapModel = Nothing
       EtabsObject = Nothing
    
    End Sub

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDStAISC360_05_IBC2006 Interface](95d16455-f7a6-10e7-95d4-c9947549f89a.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

