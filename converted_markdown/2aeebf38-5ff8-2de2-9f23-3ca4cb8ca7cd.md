

CSI API ETABS v1

# cDatabaseTablesSetTableForEditingArray Method  
  
---  
  
Reads a table from a string array and adds it to a stored table list until
either the [ApplyEditedTables(Boolean, Int32, Int32, Int32, Int32,
String)](bbc84bd9-e864-c3e9-642c-2f2bda4e066c.htm) or
[CancelTableEditing](f089af89-af1f-b462-307a-85c3266ef11a.htm) command is
issued.

**Namespace:** [ETABSv1](2780f1b8-2033-5289-2298-1cdb2a7508d9.htm)  
**Assembly:** ETABSv1 (in ETABSv1.dll) Version: 1.0.0.0 (1.27.0.0)

![](../icons/SectionExpanded.png)Syntax

C#

VB

C++

F#

Copy

    
    
    int SetTableForEditingArray(
    	string TableKey,
    	ref int TableVersion,
    	ref string[] FieldsKeysIncluded,
    	int NumberRecords,
    	ref string[] TableData
    )
    
    
    Function SetTableForEditingArray ( 
    	TableKey As String,
    	ByRef TableVersion As Integer,
    	ByRef FieldsKeysIncluded As String(),
    	NumberRecords As Integer,
    	ByRef TableData As String()
    ) As Integer
    
    Dim instance As cDatabaseTables
    Dim TableKey As String
    Dim TableVersion As Integer
    Dim FieldsKeysIncluded As String()
    Dim NumberRecords As Integer
    Dim TableData As String()
    Dim returnValue As Integer
    
    returnValue = instance.SetTableForEditingArray(TableKey, 
    	TableVersion, FieldsKeysIncluded, 
    	NumberRecords, TableData)
    
    
    int SetTableForEditingArray(
    	String^ TableKey, 
    	int% TableVersion, 
    	array<String^>^% FieldsKeysIncluded, 
    	int NumberRecords, 
    	array<String^>^% TableData
    )
    
    
    abstract SetTableForEditingArray : 
            TableKey : string * 
            TableVersion : int byref * 
            FieldsKeysIncluded : string[] byref * 
            NumberRecords : int * 
            TableData : string[] byref -> int 
    

#### Parameters

TableKey

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
Input Item: The table key for a table which has been interactively edited. The
table must be one that can be interactively edited.

TableVersion

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returned Item: The version number of the specified table.

FieldsKeysIncluded

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
Input Item: A zero-based array listing the field keys associated with the
specified table for which data is reported in the order it is reported in the
TableData array. These are essentially the column headers of the data reported
in TableData.

NumberRecords

    Type: [SystemInt32](https://docs.microsoft.com/dotnet/api/system.int32)  
Input Item: The number of records of data for each field. This is essentially
the number of rows of data.

TableData

    Type: [SystemString](https://docs.microsoft.com/dotnet/api/system.string)  
Input Item: A zero-based, one-dimensional array of the table data, excluding
headers, reported row by row. See [GetTableForDisplayArray(String, String,
String, Int32, String, Int32,
String)](3dc2fc02-1288-7ae6-0557-d31560533e96.htm) for a more detailed
explanation of the data format.

#### Return Value

Type: [Int32](https://docs.microsoft.com/dotnet/api/system.int32)  
Returns 0 if the function executes correctly, otherwise returns nonzero

![](../icons/SectionExpanded.png)Remarks

Here is an example of how to set the inputs:

TableKey = "EXAMPLE Material Table"

FieldsKeysIncluded = {"Material Name", "Material Type", "Density"}

NumberRecords = 5

TableData = {A992Fy50, Steel, 490, 4000Psi, Concrete, 150, A615Gr60, Rebar,
480, A416Gr270, Tendon, 470, 6061T6, Aluminum, 170}

Executing the function with these inputs would be equivalent to setting the
following table interactively:

EXAMPLE Material Name| Type| Density  
---|---|---  
A992Fy50| Steel| 490  
4000Psi| Concrete| 150  
A615Gr60| Rebar| 480  
A416Gr270| Tendon| 470  
6061T6| Aluminum| 170  
  
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

