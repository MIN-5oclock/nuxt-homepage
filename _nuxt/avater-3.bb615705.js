const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NUM2M0FDMDkyMTVFNTExQTUzM0FGRkVCN0ZCQjNFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NTA0QkNFMTFEMTMxMUVCODRBMDk5OUMyRjNCODQwMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTA0QkNFMDFEMTMxMUVCODRBMDk5OUMyRjNCODQwMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMxNTZFRTMyM0ZGQkU3MTFCREJFRDZEOERGRjBBREVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1QzYzQUMwOTIxNUU1MTFBNTMzQUZGRUI3RkJCM0VEIi8+IDwvcmRmOkRlc2NyaXB0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";export{A as u};
