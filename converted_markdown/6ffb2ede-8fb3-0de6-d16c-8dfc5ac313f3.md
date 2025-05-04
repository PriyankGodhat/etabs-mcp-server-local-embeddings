

CSI API ETABS v1

# cDatabaseTablesSetLoadCombinationsSelectedForDisplay Method  
  
---  
  
Sets the load combinations that are selected for table display.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetLoadCombinationsSelectedForDisplay(
    	ref string[] LoadCombinationList
    )
    
    
    Function SetLoadCombinationsSelectedForDisplay ( 
    	ByRef LoadCombinationList As String()
    ) As Integer
    
    Dim instance As cDatabaseTables
    Dim LoadCombinationList As String()
    Dim returnValue As Integer
    
    returnValue = instance.SetLoadCombinationsSelectedForDisplay(LoadCombinationList)
    
    
    int SetLoadCombinationsSelectedForDisplay(
    	array<String^>^% LoadCombinationList
    )
    
    
    abstract SetLoadCombinationsSelectedForDisplay : 
            LoadCombinationList : string[] byref -> int 
    

#### Parameters

LoadCombinationList

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
Input Item: The zero-based list of load combinations selected for table
display.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns 0 if the function executes correctly, otherwise returns nonzero

![](../icons/SectionExpanded.png)Remarks

This list sets the load combinations that are included when displaying
analysis results. If no load combinations are to be selected then the
LoadCombinationList item should include a single blank string.

![](../icons/SectionExpanded.png)See Also

#### Reference

[cDatabaseTables Interface](ee40c9d3-38a7-f8fa-62e4-9da8c2cd3af7.htm)

[ETABSv1 Namespace](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)

ETABS®, SAFE®, SAP2000® and CSiBridge® are registered trademarks of Computers
and Structures, Inc.  

[Copyright © Computers and Structures, Inc. 2023. All rights
reserved.](http://www.csiamerica.com)

Send comments on this topic to
[support@csiamerica.com](mailto:support%40csiamerica.com?Subject=CSI%20API%20ETABS%20v1)

