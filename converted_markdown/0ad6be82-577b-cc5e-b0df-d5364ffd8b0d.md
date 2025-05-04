

CSI API ETABS v1

# cDConcSlabACI318_14GetPreference Method  
  
---  
  
Retrieves the value of a concrete slab design preference item

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
    	ref string textValue,
    	ref double numericValue
    )
    
    
    Function GetPreference ( 
    	Item As Integer,
    	ByRef textValue As String,
    	ByRef numericValue As Double
    ) As Integer
    
    Dim instance As cDConcSlabACI318_14
    Dim Item As Integer
    Dim textValue As String
    Dim numericValue As Double
    Dim returnValue As Integer
    
    returnValue = instance.GetPreference(Item, 
    	textValue, numericValue)
    
    
    int GetPreference(
    	int Item, 
    	String^% textValue, 
    	double% numericValue
    )
    
    
    abstract GetPreference : 
            Item : int * 
            textValue : string byref * 
            numericValue : float byref -> int 
    

#### Parameters

Item

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
This is an integer between 1 and 21, inclusive, indicating the preference item
considered

  1. The resistance factor Phi (tension controlled)
  2. The resistance factor Phi (compression controlled)
  3. The resistance factor Phi (shear)
  4. The clear cover for the top non-prestressed reinforcement [L]
  5. The clear cover for the bottom non-prestressed reinforcement [L]
  6. The name of the reinforcement bar that is the preferred rebar for non-prestressed reinforcement
  7. This is either A or B indicating the design strip layer that represents the inner slab rebar layer
  8. The top CGS of the tendon [L]
  9. The bottom CGS of the tendon in exterior bays [L]
  10. The bottom CGS of the tendon in interior bays [L]
  11. This is either One Way or Two Way indicating the slab type assumed when calculating the required minimum reinforcing for the slab
  12. Indicates if the allowable PT stresses are user defined
  13. The concrete strength ratio at transfer used when calculating initial stresses
  14. The top fiber tensile stress ratio used when calculating initial stresses
  15. The bottom fiber tensile stress ratio used when calculating initial stresses
  16. The extreme fiber compressive stress ratio used when calculating initial stresses
  17. The top fiber tensile stress ratio used when calculating final stresses
  18. The bottom fiber tensile stress ratio used when calculating final stresses
  19. The extreme fiber compressive stress ratio used when calculating final stresses
  20. The extreme fiber compressive stress ratio used when calculating sustained stresses
  21. The fraction of live load considered used when calculating sustained stresses

textValue

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
If the indicated Item is a text value, this argument will be filled, and
numericValue should be ignored

numericValue

    Type: [SystemDouble](https://docs.microsoft.com/dotnet/api/system.double)  
If the indicated Item is a number, this argument will be filled, and textValue
will be blank

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns zero if the item is successfully retrieved; otherwise it returns a
nonzero value

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDConcSlabACI318_14 Interface](059283ad-35d5-aba4-c96a-29dfafca6523.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

