const e=document.getElementById("inline");chrome.storage.sync.get({inlineMode:!1},o=>{e.checked=o.inlineMode}),e.addEventListener("change",function(){this.checked?(console.log("Checkbox is checked.."),chrome.storage.sync.set({inlineMode:!0})):(console.log("Checkbox is not checked.."),chrome.storage.sync.set({inlineMode:!1}))});const o=document.getElementById("promptCustomization");chrome.storage.sync.get({customization:0},e=>{o.value=e.customization}),o.addEventListener("change",function(){0==this.value?(console.log("Prompt customization set to default"),chrome.storage.sync.set({customization:0})):1==this.value?(console.log("Prompt customization set to creative"),chrome.storage.sync.set({customization:1})):(console.log("Prompt customization set to critical"),chrome.storage.sync.set({customization:2}))});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6IkFDQUEsTUFBTSxFQUFlLFNBQVMsY0FBYyxDQUFDLFVBRTdDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLENBQUUsV0FBWSxDQUFBLENBQU0sRUFDcEIsQUFBQyxJQUNHLEVBQWEsT0FBTyxDQUFHLEVBQU0sVUFBVSxBQUMzQyxHQUVKLEVBQWEsZ0JBQWdCLENBQUMsU0FBVSxXQUNoQyxJQUFJLENBQUMsT0FBTyxFQUNkLFFBQVEsR0FBRyxDQUFDLHlCQUNaLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBRSxXQUFZLENBQUEsQ0FBSyxLQUU1QyxRQUFRLEdBQUcsQ0FBQyw2QkFDWixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUUsV0FBWSxDQUFBLENBQU0sR0FFbkQsR0FFQSxNQUFNLEVBQWEsU0FBUyxjQUFjLENBQUMsdUJBRTNDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3JCLENBQUMsY0FBZ0IsQ0FBQyxFQUNsQixBQUFDLElBQ0MsRUFBVyxLQUFLLENBQUcsRUFBTSxhQUFhLEFBQ3hDLEdBR0YsRUFBVyxnQkFBZ0IsQ0FBQyxTQUFVLFdBQ2hDLEFBQWMsR0FBZCxJQUFJLENBQUMsS0FBSyxFQUNaLFFBQVEsR0FBRyxDQUFDLHVDQUNaLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFlLENBQUMsSUFDbEMsQUFBYyxHQUFkLElBQUksQ0FBQyxLQUFLLEVBQ2pCLFFBQVEsR0FBRyxDQUFDLHdDQUNaLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFlLENBQUMsS0FFekMsUUFBUSxHQUFHLENBQUMsd0NBQ1osT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWUsQ0FBQyxHQUU3QyIsInNvdXJjZXMiOlsiPGFub24+Iiwic3JjL29wdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5saW5lU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmxpbmVcIik7XG4vLyBTZXQgdmFsdWUgY29ycmVjdGx5IGlmIGl0IGhhcyBiZWVuIHByZXZpb3VzbHkgc2V0XG5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7XG4gICAgaW5saW5lTW9kZTogZmFsc2Vcbn0sIChpdGVtcyk9PntcbiAgICBpbmxpbmVTd2l0Y2guY2hlY2tlZCA9IGl0ZW1zLmlubGluZU1vZGU7XG59KTtcbmlubGluZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2JveCBpcyBjaGVja2VkLi5cIik7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgICAgICAgIGlubGluZU1vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2JveCBpcyBub3QgY2hlY2tlZC4uXCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICAgICAgICBpbmxpbmVNb2RlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbmNvbnN0IHByb21wdEN1c3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdEN1c3RvbWl6YXRpb25cIik7XG5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7XG4gICAgY3VzdG9taXphdGlvbjogMFxufSwgKGl0ZW1zKT0+e1xuICAgIHByb21wdEN1c3QudmFsdWUgPSBpdGVtcy5jdXN0b21pemF0aW9uO1xufSk7XG5wcm9tcHRDdXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb21wdCBjdXN0b21pemF0aW9uIHNldCB0byBkZWZhdWx0XCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICAgICAgICBjdXN0b21pemF0aW9uOiAwXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PSAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvbXB0IGN1c3RvbWl6YXRpb24gc2V0IHRvIGNyZWF0aXZlXCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICAgICAgICBjdXN0b21pemF0aW9uOiAxXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvbXB0IGN1c3RvbWl6YXRpb24gc2V0IHRvIGNyaXRpY2FsXCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICAgICAgICBjdXN0b21pemF0aW9uOiAyXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeGxRVUZsTEZOQlFWTXNZMEZCWXl4RFFVRkRPMEZCUXpkRExHOUVRVUZ2UkR0QlFVTndSQ3hQUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVTnVRanRKUVVGRkxGbEJRVms3UVVGQlRTeEhRVU53UWl4RFFVRkRPMGxCUTBjc1lVRkJZU3hQUVVGUExFZEJRVWNzVFVGQlRTeFZRVUZWTzBGQlF6TkRPMEZCUlVvc1lVRkJZU3huUWtGQlowSXNRMEZCUXl4VlFVRlZPMGxCUTNCRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTm9RaXhSUVVGUkxFZEJRVWNzUTBGQlF6dFJRVU5hTEU5QlFVOHNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVVU3V1VGQlJTeFpRVUZaTzFGQlFVczdTVUZET1VNc1QwRkJUenRSUVVOTUxGRkJRVkVzUjBGQlJ5eERRVUZETzFGQlExb3NUMEZCVHl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlJUdFpRVUZGTEZsQlFWazdVVUZCVFR0SlFVTXZRenRCUVVOS08wRkJSVUVzVFVGQlRTeGhRVUZoTEZOQlFWTXNZMEZCWXl4RFFVRkRPMEZCUlRORExFOUJRVThzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUTNKQ08wbEJRVU1zWlVGQlowSTdRVUZCUXl4SFFVTnNRaXhEUVVGRE8wbEJRME1zVjBGQlZ5eExRVUZMTEVkQlFVY3NUVUZCVFN4aFFVRmhPMEZCUTNoRE8wRkJSMFlzVjBGQlZ5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGVk8wbEJRM0JETEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hIUVVGRk8xRkJRMnhDTEZGQlFWRXNSMEZCUnl4RFFVRkRPMUZCUTFvc1QwRkJUeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0WlFVRkRMR1ZCUVdVN1VVRkJRenRKUVVNelF5eFBRVUZOTEVsQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hIUVVGRk8xRkJRM1pDTEZGQlFWRXNSMEZCUnl4RFFVRkRPMUZCUTFvc1QwRkJUeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0WlFVRkRMR1ZCUVdVN1VVRkJRenRKUVVNelF5eFBRVUZMTzFGQlEwZ3NVVUZCVVN4SFFVRkhMRU5CUVVNN1VVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUVVNc1pVRkJaVHRSUVVGRE8wbEJRek5ETzBGQlEwWWlMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXZjSFJwYjI1ekxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJR2x1YkdsdVpWTjNhWFJqYUNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Z3aWFXNXNhVzVsWENJcE8xeHVMeThnVTJWMElIWmhiSFZsSUdOdmNuSmxZM1JzZVNCcFppQnBkQ0JvWVhNZ1ltVmxiaUJ3Y21WMmFXOTFjMng1SUhObGRGeHVZMmh5YjIxbExuTjBiM0poWjJVdWMzbHVZeTVuWlhRb1hHNGdJQ0FnZXlCcGJteHBibVZOYjJSbE9pQm1ZV3h6WlNCOUxGeHVJQ0FnSUNocGRHVnRjeWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBibXhwYm1WVGQybDBZMmd1WTJobFkydGxaQ0E5SUdsMFpXMXpMbWx1YkdsdVpVMXZaR1U3WEc0Z0lDQWdmVnh1SUNBcE8xeHVhVzVzYVc1bFUzZHBkR05vTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOb1lXNW5aU2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG1Ob1pXTnJaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktGd2lRMmhsWTJ0aWIzZ2dhWE1nWTJobFkydGxaQzR1WENJcE8xeHVJQ0FnSUNBZ1kyaHliMjFsTG5OMGIzSmhaMlV1YzNsdVl5NXpaWFFvSUhzZ2FXNXNhVzVsVFc5a1pUb2dkSEoxWlNCOUlDazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktGd2lRMmhsWTJ0aWIzZ2dhWE1nYm05MElHTm9aV05yWldRdUxsd2lLVHRjYmlBZ0lDQWdJR05vY205dFpTNXpkRzl5WVdkbExuTjVibU11YzJWMEtDQjdJR2x1YkdsdVpVMXZaR1U2SUdaaGJITmxJSDBnS1R0Y2JpQWdJQ0I5WEc1OUtUdGNibHh1WTI5dWMzUWdjSEp2YlhCMFEzVnpkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLRndpY0hKdmJYQjBRM1Z6ZEc5dGFYcGhkR2x2Ymx3aUtWeHVYRzVqYUhKdmJXVXVjM1J2Y21GblpTNXplVzVqTG1kbGRDaGNiaUFnZTJOMWMzUnZiV2w2WVhScGIyNGdPaUF3ZlN3Z1hHNGdJQ2hwZEdWdGN5a2dQVDRnZTF4dUlDQWdJSEJ5YjIxd2RFTjFjM1F1ZG1Gc2RXVWdQU0JwZEdWdGN5NWpkWE4wYjIxcGVtRjBhVzl1WEc0Z0lIMWNiaWxjYmx4dWNISnZiWEIwUTNWemRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGphR0Z1WjJVbkxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCcFppQW9kR2hwY3k1MllXeDFaU0E5UFNBd0tYdGNiaUFnSUNCamIyNXpiMnhsTG14dlp5aGNJbEJ5YjIxd2RDQmpkWE4wYjIxcGVtRjBhVzl1SUhObGRDQjBieUJrWldaaGRXeDBYQ0lwTzF4dUlDQWdJR05vY205dFpTNXpkRzl5WVdkbExuTjVibU11YzJWMEtIdGpkWE4wYjIxcGVtRjBhVzl1T2lBd2ZTazdYRzRnSUgxbGJITmxJR2xtS0hSb2FYTXVkbUZzZFdVZ1BUMGdNU2w3WEc0Z0lDQWdZMjl1YzI5c1pTNXNiMmNvWENKUWNtOXRjSFFnWTNWemRHOXRhWHBoZEdsdmJpQnpaWFFnZEc4Z1kzSmxZWFJwZG1WY0lpazdYRzRnSUNBZ1kyaHliMjFsTG5OMGIzSmhaMlV1YzNsdVl5NXpaWFFvZTJOMWMzUnZiV2w2WVhScGIyNDZJREY5S1R0Y2JpQWdmV1ZzYzJWN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb1hDSlFjbTl0Y0hRZ1kzVnpkRzl0YVhwaGRHbHZiaUJ6WlhRZ2RHOGdZM0pwZEdsallXeGNJaWs3WEc0Z0lDQWdZMmh5YjIxbExuTjBiM0poWjJVdWMzbHVZeTV6WlhRb2UyTjFjM1J2YldsNllYUnBiMjQ2SURKOUtUdGNiaUFnZlZ4dWZTa2lYU3dpYm1GdFpYTWlPbHRkTENKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIzQjBhVzl1Y3k1SVFWTklYMUpGUmw4NFptUTNZbVl6WlRZM1pqazVaVEUyTG1wekxtMWhjQ0o5XG4iLCJjb25zdCBpbmxpbmVTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubGluZVwiKTtcbi8vIFNldCB2YWx1ZSBjb3JyZWN0bHkgaWYgaXQgaGFzIGJlZW4gcHJldmlvdXNseSBzZXRcbmNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFxuICAgIHsgaW5saW5lTW9kZTogZmFsc2UgfSxcbiAgICAoaXRlbXMpID0+IHtcbiAgICAgICAgaW5saW5lU3dpdGNoLmNoZWNrZWQgPSBpdGVtcy5pbmxpbmVNb2RlO1xuICAgIH1cbiAgKTtcbmlubGluZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYm94IGlzIGNoZWNrZWQuLlwiKTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KCB7IGlubGluZU1vZGU6IHRydWUgfSApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYm94IGlzIG5vdCBjaGVja2VkLi5cIik7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCggeyBpbmxpbmVNb2RlOiBmYWxzZSB9ICk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb21wdEN1c3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdEN1c3RvbWl6YXRpb25cIilcblxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXG4gIHtjdXN0b21pemF0aW9uIDogMH0sIFxuICAoaXRlbXMpID0+IHtcbiAgICBwcm9tcHRDdXN0LnZhbHVlID0gaXRlbXMuY3VzdG9taXphdGlvblxuICB9XG4pXG5cbnByb21wdEN1c3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMudmFsdWUgPT0gMCl7XG4gICAgY29uc29sZS5sb2coXCJQcm9tcHQgY3VzdG9taXphdGlvbiBzZXQgdG8gZGVmYXVsdFwiKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7Y3VzdG9taXphdGlvbjogMH0pO1xuICB9ZWxzZSBpZih0aGlzLnZhbHVlID09IDEpe1xuICAgIGNvbnNvbGUubG9nKFwiUHJvbXB0IGN1c3RvbWl6YXRpb24gc2V0IHRvIGNyZWF0aXZlXCIpO1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtjdXN0b21pemF0aW9uOiAxfSk7XG4gIH1lbHNle1xuICAgIGNvbnNvbGUubG9nKFwiUHJvbXB0IGN1c3RvbWl6YXRpb24gc2V0IHRvIGNyaXRpY2FsXCIpO1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtjdXN0b21pemF0aW9uOiAyfSk7XG4gIH1cbn0pIl0sIm5hbWVzIjpbImlubGluZVN3aXRjaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImlubGluZU1vZGUiLCJpdGVtcyIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldCIsInByb21wdEN1c3QiLCJjdXN0b21pemF0aW9uIiwidmFsdWUiXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wdGlvbnMuSEFTSF9SRUZfOGZkN2JmM2U2N2Y5OWUxNi5qcy5tYXAifQ==
