

CSI API ETABS v1

# cDCoMexican_RCDF_2017GetPreference Method  
  
---  
  
Retrieves the value of a concrete design preference item.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int GetPreference(
    	int Item,
    	ref double Value
    )
    
    
    Function GetPreference ( 
    	Item As Integer,
    	ByRef Value As Double
    ) As Integer
    
    Dim instance As cDCoMexican_RCDF_2017
    Dim Item As Integer
    Dim Value As Double
    Dim returnValue As Integer
    
    returnValue = instance.GetPreference(Item, 
    	Value)
    
    
    int GetPreference(
    	int Item, 
    	double% Value
    )
    
    
    abstract GetPreference : 
            Item : int * 
            Value : float byref -> int 
    

#### Parameters

Item

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer between 1 and 12, inclusive, indicating the preference item
considered.

  1. Number of interaction curves
  2. Number of interaction points
  3. Consider minimum eccentricity
  4. Design for B/C Capacity Ratio?
  5. Phi bending
  6. Phi tension 
  7. Phi compression controlled tied
  8. Phi compression controlled spiral
  9. Phi shear and/or torsion
  10. Pattern live load factor
  11. Utilization factor limit
  12. Multi-response case design

Value

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
The value of the considered preference item.

  1. Number of interaction curves 

Value >= 4 and divisable by 4

  2. Number of interaction points 

Value >= 5 and odd

  3. Consider minimum eccentricity 

0 = No

Any other value = Yes

  4. Design for B/C Capacity Ratio? 

1 = No

2 = Yes

  5. Phi bending 

Value > 0

  6. Phi tension 

Value > 0

  7. Phi compression controlled tied 

Value > 0

  8. Phi compression controlled spiral 

Value > 0

  9. Phi shear and/or torsion 

Value > 0

  10. Pattern live load factor 

Value >= 0

  11. Utilization factor limit 

Value > 0

  12. Multi-response case design 
     * 1 = Envelopes
     * 2 = Step-by step
     * 3 = Last step
     * 4 = Envelopes - All
     * 5 = Step-by step - All

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the item is successfully retrieved; otherwise it returns a
nonzero value.

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDCoMexican_RCDF_2017 Interface](f919ecfa-e0c2-5158-7043-1832562fab3a.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

